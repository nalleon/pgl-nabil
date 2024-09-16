const DOM =  {
    userInput : document.getElementById("userInput"),
    userInput2 : document.getElementById("userInput2"),
    operatorCalc : document.getElementById("operatorCalc"),
    result : document.getElementById("result"),
    btn1 : document.getElementById("btn1")
}


function operation(){
    let num1 = DOM.userInput.value;
    let num2 = DOM.userInput2.value;
    

    DOM.result.innerHTML="";

    switch (DOM.operatorCalc.value) {
        case '-':
            DOM.result.innerHTML = num1 + " - "+num2+ " = "+(parseFloat(num1))-(parseFloat(num2));
            break;

        case '*':
            DOM.result.innerHTML = num1 + " * "+num2+ " = "+(parseFloat(num1))*(parseFloat(num2));
            break;  

        case ':':
            DOM.result.innerHTML = num1 + " : "+num2+ " = "+(parseFloat(num1))/(parseFloat(num2));
            break;

        default:
            DOM.result.innerHTML = num1 + " + "+num2+ " = "+(parseFloat(num1))+(parseFloat(num2));
            break;
    }
}

DOM.btn1.addEventListener('click', operation);
