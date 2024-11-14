import React, { useEffect, useState, useRef } from 'react'
import Cell from "../models/Cell";
import Game from "../models/Game";
import CellCard from './CellCard';

type Props = {}
/**
 * @author Nabil León Álvarez
 */
const GameMines = (props: Props) => {
    const [cells, setCells] = useState<Array<Cell>>([]);
    const [restart, setRestart] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [currentIndexX, setCurrentIndexX] = useState(0);
    const [currentIndexY, setCurrentIndexY] = useState(0);

    const refGame = useRef(new Game());


    
    useEffect(() => {
        let newCells = refGame.current.generateCellsContent();
        refGame.current.addBombs(newCells);
        setCells(newCells);

    }, [cells, restart])
    
    

    function changeCurrentIndex(cell : Cell){
        setCurrentIndex(cell.id);
    }

    function modifyCell (cell : Cell) : void {
        const auxArr = cells;
        auxArr[cell.id-1] = cell;
        setCells([...auxArr]);
    }



    return (
    <>
        <div>
            <h3>Game</h3>
            <button onClick={()=> setRestart(true)}> Restart game</button>
            {
                cells.map((cell, index) => (
                    <div key={index}>
                        <CellCard modifyCellParent={modifyCell} cell={cell}/>
                    </div>
                )  )
            }
        </div>


    </>
  )
}

export default GameMines