
/**
 * Práctica 4: Crear la aplicación descrita, pero si hay un error no mostrarlo 
 * sino mostrar un mensaje que diga que no se pudo grabar
 */

const fs = require(`fs`);

function getTable(num){
    let limit = 10;
    let result = "";
    for(let i = 1; i <= limit; i++){
        result += `${num} * ${i} = ${num * i}\n`;;
    }
    
    return result;
}


let num = 4;

fs.writeFile(
    'practice04.txt', getTable(num), (error)=>{
        if(error){
            console.log('No se pudo grabar el archivo');
        } else{
            console.log('Archivo creado con exito');
        }
    
    }
);


