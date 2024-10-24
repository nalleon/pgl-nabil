import React, { useState, useEffect } from 'react';

/**
 * Realizar un componente react: Memoria8.tsx que
 * realice el juego de memorizar de forma ordenada 8 números.
 * Durante 3 segundos se le muestra al usuario los 8 números y
 * luego se ocultan ( vale mostrar cualquier otra cosa ) Luego el
 * usuario irá pulsando en los botones. Primero debe pulsar el botón
 * que incluye el 1, si pulsa en la casilla que lo tiene se le muestra y
 * ya queda para siempre, en otro caso no muestra nada. Luego lo
 * mismo con el que incluye el 2, etc. Cada pulsación de botón aumenta un contador
 */

type Props = {}

const Practice31 = (props: Props) => {
    /**
     * UseStates
     */
    const [number, setnumber] = useState<number[]>([]);
    const [revealedNumbers, setrevealedNumbers] = useState<number[]>([]);
    const [currentNumber, setCurrentNumber] = useState<number>(1); 
    const [attempts, setAttempts] = useState<number>(0);
    const [isShowing, setIsShowing] = useState<boolean>(true);
    const [isGameOver, setIsGameOver] = useState<boolean>(false);

    const numArray = [1,2,3,4,5,6,7,8];

    useEffect(() => {
        setIsGameOver(false);
        generateNumbers();
    }, [isGameOver]);


    function generateNumbers() {
        const shuffleNumArray = [...numArray];

        for (let i = 0; i < shuffleNumArray.length; i++){
            const j = Math.floor(Math.random() * (i + 1));
            [shuffleNumArray[i], shuffleNumArray[j]] = [shuffleNumArray[j], shuffleNumArray[i]];
        }
        
        setnumber(shuffleNumArray);

        setTimeout(() =>{
            setIsShowing(false);
        }, 3000)
    }


    function handleClick(index){
        setAttempts(attempts+1);

        if (number[index] === currentNumber){
            const updatedRevealedNumbers = [...revealedNumbers, number[index]];
            setrevealedNumbers(updatedRevealedNumbers);
            setCurrentNumber(currentNumber+1);
            
            if(updatedRevealedNumbers.length === numArray.length){
                alert("Congratulations, you won!");
                endGame();
            }


        }

    }

    function endGame(){
        setIsGameOver(true);
        setrevealedNumbers([]); 
        setCurrentNumber(1); 
        setAttempts(0);
        setIsShowing(true); 
    }

  return (
        <>
        <div className='main-container'>
            <h2>Memory Game</h2>
            <p>Attemps: {attempts}</p>
            <div className='btn-container'>
                {number.map((num, index) => (
                    <button key={index} onClick={() => handleClick(index)}>
                        {isShowing || revealedNumbers.includes(num) ? num : "?"}                    
                    </button>
                ))}

            </div>
        </div>
        </>
  )
}

export default Practice31