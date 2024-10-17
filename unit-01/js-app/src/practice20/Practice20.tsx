import React, { useEffect, useState } from 'react'

type Props = {}
/**
 * button to restart
 * use effect 
 */
const Practice20 = (props: Props) => {
    let arr = [0,1,2,3,4,5,6,7,8,9];
    const [restart, setRestart] = useState(true);
    const [numBet, setNumBet] = useState(0);
    const [win, setWin] = useState(false);
    const [message, setMessage] = useState('');


    useEffect(() => {
      const generateNum = () => {
        const rndNum = Math.trunc(Math.random() * arr.length );
        setNumBet(rndNum);
      }

      if (restart) {
        generateNum();
        setRestart(false); 
      }
      console.log(numBet);
    }, [restart]);


    const handleClick = (num: number) => {
        if (num === numBet) { 
          setWin(true);
          setMessage (`You won! Num was ${numBet}`);
        } else if(num > numBet){
          setMessage (`${num} > hidden number`);
        } else {
          setMessage (`${num} < hidden number`);
        }
    }
    
    const restartGame = () =>{
      setRestart(true);
      setMessage('');
      setWin(false);
    }

  return (
    <>
        <h2>Guess num:</h2>
        {arr.map(num => {
            return <button key={num} onClick={() => handleClick(num)}> {num}</button>
        })}
        <button onClick={restartGame}>Restart</button>

        <p>{message}</p>

        {win && <p>Congratulations! You guessed the number correctly.</p>}

        
     
    </>
  )
}

export default Practice20