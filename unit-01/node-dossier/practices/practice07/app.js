/**
 * Crear la aplicación descrita. El fichero: manejarTabla.js debe exportar un
método: escribir(nombreDelFichero, textoEscribir ) que tiene que devolver una promesa.
En el interior del método escribir() se llama a la función: fs.writeFileSync()
 */

const {write} = require("./utils/fileManagement");
const {createTable} = require("./model/table");
const tyrgs = require("yargs");




yargs.command("writeTable", "Write a table in a file", {}, writeTableParam)


function writeTable(){
    
    let num = parseInt(process.argv[2]);
    
    if(!Number.isInteger(num) || num <= 0){
        console.log("Error: You must use an integer and positive number.");
        process.exit(1);
    }

    write("practice07.txt", createTable(num))
    .then(console.log("save ok"))
    .catch(err => console.log("error"));
}


writeTable();