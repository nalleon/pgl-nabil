const DOM =  {
    userInput : document.getElementById("userInput"),
    userInput2 : document.getElementById("userInput2"),
    operatorCalc : document.getElementById("operatorCalc")
}


function operation(){
    let num1 = DOM.userInput.value;
    let num2 = DOM.userInput2.value;

    DOM.table2.innerHTML="";

    switch (operatorCalc.value) {
        case resta:
                column.innerHTML = num1 + " - "+num2+ " = "+(num1-num2)+"\n";
            break;

        case multiplicacion:
                column.innerHTML = num1 + " * "+num2+ " = "+(num1*num2)+"\n";
            break;  

        case division:
                column.innerHTML = num1 + " : "+num2+ " = "+(num1/num2)+"\n";
            break;    

        default:
                column.innerHTML = num1 + " + "+num2+ " = "+(num1+num2)+"\n";
            break;
    }
}


DOM.btn1.addEventListener(onclick, () => {
    operationCalc();
});
