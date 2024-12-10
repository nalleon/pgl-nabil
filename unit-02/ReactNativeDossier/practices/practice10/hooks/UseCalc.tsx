import { View, Text } from 'react-native'
import React, { useState } from 'react'

type Props = {}

const UseCalc = () => {

    /**
     * UseStates
     */
    const [result, setResult] = useState<string>("0");
    const [history, setHistory] = useState<string>("")
    const [operatorChosen, setOperator] = useState<string>("");

    /**
     * Other properties
     */
    const [firstInput, setFirstInput] = useState<boolean>(true)

    function changePosNeg(num: number) {
        return (num * -1);
    }

    function modify(selected: string) {
        if (!isNaN(parseFloat(selected))) {
            if (firstInput) {
                setResult("");
                setFirstInput(false);
            }

            const aux = parseFloat(result + selected);
            setResult("" + aux);

        } else if (selected === "." && !result.includes(".")) {
            const aux = result + selected;
            setResult(aux);
        } else {
            selectOperator(selected);
        }

    }

    function selectOperator(operator: string) {
        switch (operator) {
            case 'AC':
                setHistory('');
                setResult('0');
                return;
            case '+/-':
                setResult(changePosNeg(parseFloat(result)).toString());
                return;
            case 'DL':
                handleDelete();
                return;
            case '/':

                if (operatorChosedBefore()) {
                    return;
                }

                setHistory(result);
                setResult('');
                setOperator(operator);


                return;
            case 'x':
                if (operatorChosedBefore()) {
                    return;
                }

                setHistory(result);
                setResult('');
                setOperator("x");
                return;
            case '+':
                if (operatorChosedBefore()) {
                    return;
                }

                setHistory(result);
                setResult('');
                setOperator("+");
                return;
            case '-':
                if (operatorChosedBefore()) {
                    return;
                }

                setHistory(result);
                setResult('');
                setOperator("-");
                return;

            case '=':
                if (operatorChosen === '') {
                    return;
                }
                const operationResult = calculateResult(operatorChosen);
                setResult(operationResult.toString());
                setHistory("");
                setOperator("");
                return;
        }

        function operatorChosedBefore() {
            if (operatorChosen !== '') {
                const operationResult = calculateResult(operatorChosen);
                setHistory(operationResult.toString());
                setResult(operationResult.toString());
                setOperator('');
                return true;
            }

            return false;
        }


        function calculateResult(operator: string): number {
            let auxResult: number = 0;
            let auxFinal = 0;
            switch (operator) {
                case "+":
                    auxResult = parseFloat(history) + parseFloat(result);
                    auxFinal = auxResult;
                    break;
                case "-":
                    auxResult = parseFloat(history) - parseFloat(result);
                    auxFinal = auxResult;
                    break;
                case "x":
                    auxResult = parseFloat(history) * parseFloat(result);
                    auxFinal = auxResult;
                    break;
                case "/":
                    auxResult = (parseFloat(history)) / (parseFloat(result));
                    auxFinal = auxResult;
                    break;
            }

            return auxFinal;
        }


        function handleDelete() {
            if (result === '0' || result === '') {
                return;
            }

            const aux = result.toString().slice(0, -1);
            if (result.includes('-') && result.length == 2) {
                setResult('0');
                return;
            }

            setResult(aux);
        }

    }
    return {
        result,
        history,
        modify
    }

}

export default UseCalc