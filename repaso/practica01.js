// Important!
const DOM = {
    table : document.getElementById("table"),
    userInput : document.getElementById("userInput"),
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

// Button on click actions

DOM.btn1.addEventListener('click', () => {
    generateTableByUserInput();
});
