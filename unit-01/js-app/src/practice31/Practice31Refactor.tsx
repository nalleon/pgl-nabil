import React, { useState, useEffect, useRef } from 'react';
import './practice31.css';
import Game31 from './model/game31.ts';
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

const Practice31Refactor = (props: Props) => {
    /**
     * UseStates
     */
    const [attempts, setAttempts] = useState<number>(0);
    const [isShowing, setIsShowing] = useState<boolean>(true);
    const [isGameOver, setIsGameOver] = useState<boolean>(false);

    const [numArr, setnumArr] = useState<number[]>([]);
    const [revealedNums, setrevealedNums] = useState<number[]>([]);
    const refGame = useRef<Game31>({} as Game31);


    useEffect(() => {
        refGame.current = new Game31();
        startGame();
    }, [isGameOver]);

    const startGame = () => {
        refGame.current.generateNumbers();
        setnumArr(refGame.current.numberArray);

        setTimeout(() =>{
            setIsShowing(false);
        }, 3000);
    }

    /**
     * Function to handle the users choice
     * @param index of the button
     */

    function handleClick(index : number){
        refGame.current.bet(index);
        
        if(refGame.current.checkWin()){
            alert("Congratulations, you won!");
            endGame();
        }
    }

    /**
     * Function to end and restart the game
     */
    function endGame(){
        setIsGameOver(true);
        refGame.current.revealedNumbers = [];
        refGame.current.currentNumber = 1;
        refGame.current.attempts = 0;
        setIsShowing(true); 
    }

    function showNum(index : number) {
       refGame.current.showNum(index);
    }

  return (
        <>
        <div className='main-container'>
            <h2>Memory Game</h2>
            <p>Attemps: {attempts}</p>
            <div className='btn-container'>
                {numArr.map((num, index) => (
                    <button key={index} onClick={() => handleClick(index)} onMouseUp={() => showNum(index)}>

                        {isShowing ||
                         refGame.current.revealedNumbers.includes(num) ? num : "???"}                    
                    </button>
                ))}

            </div>
        </div>
        </>
  )
}

export default Practice31Refactor