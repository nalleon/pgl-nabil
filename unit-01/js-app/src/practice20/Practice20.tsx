import React, { useEffect, useState } from 'react'

type Props = {}
/**
 * button to restart
 * use effect 
 */
const Practice20 = (props: Props) => {
    let arr = [1,2,3,4,5,6,7,8,9];
    const [restart, setRestart] = useState(false);
    const [numBet, setNum] = useState(1);
    const [win, setWin] = useState(false);


    useEffect(() => {
      const generateNum = () => {
        const rndNum = Math.trunc(Math.random() * arr.length );
        setNum(rndNum);
      }

      generateNum();
      console.log(numBet);
    }, [numBet])


    const handleClick = (num: number) => {
        if (num === numBet) { 
          setWin(true);
          return <p> You won! Num was {numBet}</p>
        } else if(num > numBet){
            return <p> {num} is greater than hidden number </p>
        } else {
            return <p> {num} is smaller than hidden number </p>
        }
      }
    

  return (
    <>
        <h2>Guess num:</h2>
        {arr.map(num => {
            return <button key={num} onClick={() => handleClick(num)}> {num}</button>
        })}
        <button onClick={() => {
                setWin(false);
            }}>Restart
        </button>

        {win && <p>Congratulations! You guessed the number correctly.</p>}

        
     
    </>
  )
}

export default Practice20