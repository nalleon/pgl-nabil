import React, { useEffect, useState } from 'react'
import Cell from '../models/Cell'
import CellCardComponent from './CellCardComponent';

type Props = {}
/**
 * TODO:
 * Restart buttto, initialize correctly useEffect
 */
const MinesweeperComponent = (props: Props) => {
  const [board, setBoard] = useState<Array<Cell>>([]);
  const [gameOver, setGameOver] = useState(false);


  useEffect(() => {

  }, [board, gameOver])
  
  function modifyCell(cell : Cell){
    
  }
  
  return (
    <>
      <div>MinesweeperComponent</div>

      {gameOver && <button onClick={() => setBoard([])}>Restart</button>}

      {board.map((cell, index) => (
        <div key={index}>
            <CellCardComponent key={index} />
        </div>
      ))}
    </>
  )
}

export default MinesweeperComponent