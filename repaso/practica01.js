// Important!
const DOM = {
    table : document.getElementById("table")
};

// const tabla = document.getElementById("table")

function generateTable(){
    let max = 10;
    let num = 2;

    for(let i=1; i <= max; i++){
        let row = document.createElement("tr");
        let column = document.createElement("td");
        column.innerHTML = num + " * "+i+ " = "+(i*num)+"\n";
        row.appendChild(column);

        DOM.table.appendChild(row);
    
    } 

}

generateTable();

/* 
    For text area:

for(let i=0; i <= max; i++){
    data+= num + " * "+i+ " = "+(i*num)+"\n"

 } 

 */