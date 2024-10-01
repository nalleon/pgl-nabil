// read file

const fs= require(`fs`);

function showName(name){
    return name;
}

let name = 'Nombre del alumno: Nabil Leon Alvarez';

fs.writeFile(
    'name.txt', showName(name), (error)=>{
        if(error){
            throw error;
        } else{
            console.log('Archivo creado con exito');
        }
        
    }

);
