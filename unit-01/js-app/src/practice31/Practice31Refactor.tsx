import React, { useState, useEffect, useRef } from 'react';
import './practice31.css';
import Game31 from './model/game31.ts';
import Cell from './model/cell.ts';
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
    const [cellArr, setCellArr] = useState<Cell[]>([]);

    const refGame = useRef<Game31>({} as Game31);


    useEffect(() => {
        refGame.current = new Game31(8);
        setCellArr(refGame.current.initializeCells());
        startGame();
        setIsGameOver(false);

    }, [isGameOver]);

    const startGame = () => {
        setAttempts(0);
        setIsShowing(true);

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

        setAttempts(refGame.current.attempts);
        
        if(refGame.current.checkWin()){
            alert("Congratulations, you won!");
            setIsGameOver(true);
            startGame();
        }
    }

  return (
    <>
    <div className="main-container">
        <h2>Memory Game</h2>
        <p>Attempts: {attempts}</p>
        <div className="btn-container">
            {cellArr.map((cell, index) => (
                <button key={index} onClick={() => handleClick(index)}>
                    {isShowing || refGame.current.revealedNumbers.includes(cell.value) ? cell.value : "???"}
                </button>
            ))}
        </div>
    </div>
</>
  )
}

export default Practice31Refactor