/**
 * Crear la aplicación descrita. El fichero: manejarTabla.js debe exportar un
método: escribir(nombreDelFichero, textoEscribir ) que tiene que devolver una promesa.
En el interior del método escribir() se llama a la función: fs.writeFileSync()
 */

const {write} = require("./utils/fileManagement");
const {createTable} = require("./model/table");

const yargs = require("yargs/yargs");
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

console.log(argv);


function writeTable(){
    write("practice07.txt", createTable(argv.table))
    .then(console.log("save ok"))
    .catch(err => console.log("error"));
}


writeTable();