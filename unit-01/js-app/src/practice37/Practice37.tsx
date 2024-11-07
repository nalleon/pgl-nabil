import React, { useEffect, useRef, useState } from 'react'
import Calculator from './model/Calculator.ts';

const Practice37 = (props: Props) => {
    const [number, setNumber] = useState<number>(0);
    const refCalculator = useRef(new Calculator());

    function handleClick(event:React.MouseEvent<HTMLButtonElement>){
        event.preventDefault();
        let num = refCalculator.current.generateRndNum();
        setNumber(num);
    }

    return(
        <>  
            <h2>Component A</h2>
            <button onClick={handleClick}>Send rnd num to child</button>
            <br />
            <ComponenteHijo numberRnd={number}/> 
        </>
    )
}

export default Practice37

type Props = {
    numberRnd: number;
}


const ComponenteHijo = (props: Props) => {
    const [number, setNumber] = useState<number>(0);
    const [descomposition, setDescomposition] = useState("");
    const refCalculator = useRef(new Calculator());

    useEffect(() => {
        setNumber(props.numberRnd);
        showDescomposition();
    }, [props.numberRnd])
    


    function showDescomposition(){
        let num = props.numberRnd;
        let descNum = refCalculator.current.descomposeNum(num);
        setDescomposition(descNum);
    }
    
    return (
        <>
            <br />
            <h2>Component B</h2>
            <input type="number" onChange={(e) => setNumber(Number(e.target.value))} value={number} />
            <br/>
            <br />
            <input type="textarea" value={descomposition}/> 
        </>
    )


}