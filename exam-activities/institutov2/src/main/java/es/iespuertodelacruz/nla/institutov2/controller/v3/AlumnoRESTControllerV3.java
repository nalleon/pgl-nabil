package es.iespuertodelacruz.nla.institutov2.controller.v3;

import com.fasterxml.jackson.databind.ObjectMapper;
import es.iespuertodelacruz.nla.institutov2.dto.AlumnoDTOV2;
import es.iespuertodelacruz.nla.institutov2.dto.AlumnoDTOV3;
import es.iespuertodelacruz.nla.institutov2.dto.AlumnoOutputDTOV3;
import es.iespuertodelacruz.nla.institutov2.entities.Alumno;
import es.iespuertodelacruz.nla.institutov2.services.AlumnoService;
import es.iespuertodelacruz.nla.institutov2.services.FileStorageService;
import es.iespuertodelacruz.nla.institutov2.utils.ApiResponse;
import es.iespuertodelacruz.nla.institutov2.utils.Globals;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URLConnection;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import org.springframework.core.io.Resource;

/**
 * @author Nabil Leon Alvarez <@nalleon>
 */
@RestController
@RequestMapping("/instituto/api/v3/alumnos")
@CrossOrigin
public class AlumnoRESTControllerV3 {

    @Autowired AlumnoService service;
    @Autowired
    FileStorageService storageService;

    Logger logger = Logger.getLogger(Globals.LOGGER_ALUMNO);

    private final String RUTA_FOTOS = "uploads/fotos/";

    @PostMapping(consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    @PreAuthorize("hasRol('ROLE_ADMIN')")
    public ResponseEntity<ApiResponse<AlumnoDTOV2>> add(
            @RequestPart(value = "alumno") String alumnoJSON,
            @RequestPart(value = "foto", required = false) MultipartFile foto) throws IOException {

        if (alumnoJSON == null || alumnoJSON.isEmpty()) {
            return ResponseEntity.badRequest()
                    .body(new ApiResponse<>(400, "El objeto alumno no puede estar vacío", null));
        }

        ObjectMapper objectMapper = new ObjectMapper();
        AlumnoDTOV3 dto;

        try {
            dto = objectMapper.readValue(alumnoJSON, AlumnoDTOV3.class);
        } catch (Exception e) {
            logger.info(alumnoJSON);
            return ResponseEntity.badRequest()
                    .body(new ApiResponse<>(400, "Error al procesar el JSON del alumno", null));
        }

        if (dto == null) {
            return ResponseEntity.badRequest()
                    .body(new ApiResponse<>(400, "Datos del alumno inválidos", null));
        }

        if (service.findById(dto.dni()) != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(new ApiResponse<>(409, "El alumno con este DNI ya existe", null));
        }

        Alumno aux = new Alumno();
        aux.setDni(dto.dni());
        aux.setApellidos(dto.apellidos());
        aux.setFechanacimiento(dto.fechanacimiento());
        aux.setNombre(dto.nombre());

        if (foto != null && !foto.isEmpty()) {
            String nombreOriginal = foto.getOriginalFilename();

            String extension = "";
            if (nombreOriginal != null && nombreOriginal.contains(".")) {
                extension = nombreOriginal.substring(nombreOriginal.lastIndexOf("."));
            }

            String nombreArchivo = dto.dni() + "_foto" + extension;
            Path rutaFoto = Paths.get(RUTA_FOTOS, nombreArchivo);
            Files.createDirectories(rutaFoto.getParent());
            Files.write(rutaFoto, foto.getBytes());

            aux.setPath_foto(rutaFoto.toString());
        }

        Alumno saved = service.save(aux);
        AlumnoDTOV2 result = new AlumnoDTOV2(saved.getNombre(), saved.getApellidos());

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new ApiResponse<>(201, "Alumno creado correctamente", result));
    }


    @PutMapping("/{id}")
    @PreAuthorize("hasRol('ROLE_ADMIN')")
    public ResponseEntity<ApiResponse<AlumnoDTOV2>> update(
            @PathVariable("id") String id,
            @RequestPart(value = "alumno") String alumnoJSON,
            @RequestPart(value = "foto", required = false) MultipartFile foto) throws IOException {

        if (alumnoJSON == null || alumnoJSON.isEmpty()) {
            return ResponseEntity.badRequest()
                    .body(new ApiResponse<>(400, "El objeto alumno no puede estar vacío", null));
        }

        ObjectMapper objectMapper = new ObjectMapper();
        AlumnoDTOV3 dto;
        try {
            dto = objectMapper.readValue(alumnoJSON, AlumnoDTOV3.class);
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(new ApiResponse<>(400, "Error al procesar el JSON del alumno", null));
        }

        if (dto == null) {
            return ResponseEntity.badRequest()
                    .body(new ApiResponse<>(400, "Datos del alumno inválidos", null));
        }

        Alumno dbItem = service.findById(id);
        if (dbItem == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponse<>(404, "Alumno no encontrado", null));
        }

        dbItem.setApellidos(dto.apellidos());
        dbItem.setFechanacimiento(dto.fechanacimiento());
        dbItem.setNombre(dto.nombre());

        if (foto != null && !foto.isEmpty()) {
            String nombreArchivo = dto.dni() + "_foto";
            Path rutaFoto = Paths.get(RUTA_FOTOS, nombreArchivo);
            Files.createDirectories(rutaFoto.getParent());
            Files.write(rutaFoto, foto.getBytes());

            dbItem.setPath_foto(rutaFoto.toString());
        }

        service.update(dbItem);

        AlumnoDTOV2 result = new AlumnoDTOV2(dbItem.getNombre(), dbItem.getApellidos());

        return ResponseEntity.ok(new ApiResponse<>(200, "Alumno actualizado correctamente", result));
    }



    @GetMapping
    @PreAuthorize("hasRol('ROLE_ADMIN')")
    public ResponseEntity<?> getAll() {
        List<AlumnoOutputDTOV3> filteredList = service.findAll().stream()
                .map(alumno -> new AlumnoOutputDTOV3(alumno.getDni(), alumno.getNombre(), alumno.getApellidos()))
                .collect(Collectors.toList());

        if (filteredList.isEmpty()) {
            String message = "No se encontraron alumnos registrados";
            logger.info(message);
            return ResponseEntity.status(HttpStatus.NO_CONTENT)
                    .body(new ApiResponse<>(204, message, filteredList));
        }

        String message = "Lista de alumnos obtenida correctamente";
        logger.info(message);
        return ResponseEntity.ok(new ApiResponse<>(200, message, filteredList));
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRol('ROLE_ADMIN')")
    public  ResponseEntity<?> getById(@PathVariable(value = "id") String id) {
        Alumno aux = service.findById(id);

        if (aux != null){
            AlumnoOutputDTOV3 dto = new AlumnoOutputDTOV3(aux.getDni(), aux.getNombre(),
                    aux.getApellidos());
            ApiResponse<AlumnoOutputDTOV3> response = new ApiResponse<>(200, "Alumno encontrado", dto);
            return ResponseEntity.ok(response);
        }

        ApiResponse<AlumnoDTOV2> errorResponse = new ApiResponse<>(404, "Alumno no encontrado", null);
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
    }

    @GetMapping("/nombre/{nombre}")
    @PreAuthorize("hasRol('ROLE_ADMIN')")
    public  ResponseEntity<?> getByNombre(@PathVariable("nombre") String nombre) {
        List<AlumnoOutputDTOV3> filteredList = service.findByNombre(nombre).stream()
                .map(alumno -> new AlumnoOutputDTOV3(alumno.getDni(), alumno.getNombre(), alumno.getApellidos()))
                .toList();

        if (filteredList.isEmpty()) {
            String message = "No se encontraron alumnos registrados";
            logger.info(message);
            return ResponseEntity.status(HttpStatus.NO_CONTENT)
                    .body(new ApiResponse<>(204, message, filteredList));
        }

        String message = "Lista de alumnos obtenida correctamente";
        logger.info(message);
        return ResponseEntity.ok(new ApiResponse<>(200, message, filteredList));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRol('ROLE_ADMIN')")
    public ResponseEntity<?> delete(@PathVariable("id") String id) {
        boolean deleted = service.delete(id);

        if (deleted) {
            String message = "El alumno ha sido eliminado correctamente";
            logger.info(message + ", status: 204");
            return ResponseEntity.status(HttpStatus.NO_CONTENT)
                    .body(new ApiResponse<>(204, message, null));
        } else {
            String message = "Alumno NO eliminado";
            logger.info(message + ", status: 500");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse<>(500, message, null));
        }
    }

    @PostMapping(value = "/upload/{dni}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> uploadFile(@RequestParam("dni") String dni, @RequestParam("file") MultipartFile file) {
        String message = "";
        try {
            String namefile = storageService.save(file);
            message = "" + namefile;

            Alumno alumno = service.findById(dni);

            alumno.setPath_foto(namefile);
            service.update(alumno);

            System.out.println(alumno);

            return ResponseEntity.status(HttpStatus.OK).body(message);
        } catch (Exception e) {
            message = "Could not upload the file: " + file.getOriginalFilename()
                    + ". Error: " + e.getMessage();
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(message);
        }
    }

    @GetMapping("/img/{filename}")
    public ResponseEntity<?> getFiles(@PathVariable String filename) {
        Resource resource = storageService.get(filename);
        // Try to determine file's content type
        String contentType = null;
        try {
            contentType = URLConnection.guessContentTypeFromStream(resource.getInputStream());
        } catch (IOException ex) {
            System.out.println("Could not determine file type.");
        }
        // Fallback to the default content type if type could not be determined
        if (contentType == null) {
            contentType = "application/octet-stream";
        }
        String headerValue = "attachment"
                ;
        filename="" +
        resource.getFilename() + "";
        return ResponseEntity.
                ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(
                        org.springframework.http.HttpHeaders.
                                CONTENT_DISPOSITION,
                        headerValue
                )
                .body(resource);
    }
}
