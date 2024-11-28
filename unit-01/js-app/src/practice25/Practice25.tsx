import React, { useRef, useState } from 'react'

type Props = {}

const Practice25 = (props: Props) => {
  const numbersRef = useRef<number[]>([]);
    const [numArr, setNumArr] = useState<number[]>([]);

    const addRndNum = () => {
        const randomNumber = Math.trunc(Math.random() * 100) + 1; 
        numbersRef.current.push(randomNumber);
    };

    const showNumbers = () => {
        setNumArr([...numbersRef.current]); 
    };


  return (
    <>
        <div>
            <button onClick={addRndNum}>Aleatorio</button>
            <button onClick={showNumbers}>Mostrar</button>
            <h3>Result:</h3>
            <ul>
                {numArr.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default Practice25