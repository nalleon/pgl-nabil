
fs.writeFile(
    'practice05.txt', getTable(1), (error)=>{
        if(error){
            console.log('No se pudo grabar el archivo');
        } else{
            console.log('Archivo creado con exito');
        }
    
    }
);