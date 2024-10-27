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
    const [countdown, setCountdown] = useState<number>(3);


    const refGame = useRef<Game31>({} as Game31);


    useEffect(() => {
        refGame.current = new Game31(8);
        setCellArr(refGame.current.initializeCells());
        startGame();
        setIsGameOver(false);

    }, [isGameOver]);


    /**
     * Method to start the game
     */
    const startGame = () => {
        setAttempts(0);
        setIsShowing(true);
        setCountdown(3);

        const interval = setInterval(() => {
            setCountdown(prev => {
                if (prev <= 1) {
                    clearInterval(interval);
                    setIsShowing(false);
                    return 0; 
                }
                return prev - 1; 
            });
        }, 1000);

    }

    
    /**
     * Function to handle the users choice
     * @param index of the button
     */

    function handleClick(index : number){
        if(refGame.current.cellsArray[index].isVisible == true){
            return;
        }

        refGame.current.bet(index);
        setAttempts(refGame.current.attempts);
        
        if(refGame.current.checkWin()){
            console.log(refGame.current.revealedCells.length);
            alert("Congratulations, you won!");
            setIsGameOver(true);
            startGame();
        } 
    }

    /**
     * Function to handle the mouse down event
     * @param index of the cell targeted at the event
     */
    
    function handleMouseDown(index: number) {
        if(!refGame.current.cellsArray[index].isVisible &&
            refGame.current.revealedCells.includes(cellArr[index])){
            return;
        }

        refGame.current.showNum(index);
        
        const updatedCells = [...cellArr];
        updatedCells[index].makeVisible(); 
        setCellArr(updatedCells);
    
    }

    /**
     * Function to handle the mouse up event
     * @param index of the cell targeted at the event
     */
    
    function handleMouseUp(index: number) {
        if(refGame.current.cellsArray[index].isVisible &&
            !refGame.current.revealedCells.includes(cellArr[index])){

            refGame.current.hideNum(index);

            const updatedCells = [...cellArr];
            updatedCells[index].makeHidden();
            setCellArr(updatedCells);
        }

    }

  return (
    <>
    <div className="main-container">
        <h2>Memory Game</h2>
        <p>Attempts: {attempts}</p>
         
        <div className="btn-container">
            {cellArr.map((cell, index) => (
                <button key={index} onClick={() => handleClick(index)} 
                                    onMouseDown={() => {handleMouseDown(index)}}
                                    onMouseUp={() => handleMouseUp(index)}>
                    {isShowing || cell.isVisible ? cell.value : "???"}
                </button>
            ))}
        </div>
        {countdown > 0 && <p>Countdown: {countdown}</p>}
        {countdown === 0 && <p>Countdown finished!</p>}
    </div>
</>
  )
}

export default Practice31Refactor