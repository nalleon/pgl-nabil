// Important!

// Basic JS excercise about the table of any number up to 10 and 
// the squared of another number.

const DOM = {
    table : document.getElementById("table"),
    table2 : document.getElementById("table2"),
    userInput : document.getElementById("userInput"),
    userInput2 : document.getElementById("userInput2"),
    btn1 : document.getElementById("btn1")
};

function generateTableByUserInput(){
    let max = 10;
    let num = DOM.userInput.value;

    DOM.table.innerHTML="";

    for(let i=1; i <= max; i++){
        let row = document.createElement("tr");
        let column = document.createElement("td");
        column.innerHTML = num + " * "+i+ " = "+(i*num)+"\n";
        row.appendChild(column);
        DOM.table.appendChild(row);
    } 
}

function calculateSquared(){
    let num = DOM.userInput2.value;

    DOM.table2.innerHTML="";

    let row = document.createElement("tr");
        let column = document.createElement("td");
        column.innerHTML =  num + " ^2 "+ " = "+(num*num)+"\n";
        row.appendChild(column);
        DOM.table2.appendChild(row);
}

DOM.btn1.addEventListener('click', () => {
    generateTableByUserInput(), calculateSquared();
});
