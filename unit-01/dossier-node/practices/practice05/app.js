/**
 * Crear la aplicación descrita. El fichero: manejarTabla.js debe exportar un
método: escribir(nombreDelFichero, textoEscribir ) que tiene que devolver una promesa.
En el interior del método escribir() se llama a la función: fs.writeFileSync()
 */

const {write} = require("./utils/fileManagement");
const {createTable} = require("./model/table");

write("practice05.txt", createTable(4))
    .then(console.log("save ok"))
    .catch(err => console.log("error"));
    