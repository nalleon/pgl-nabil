import React, { useEffect, useRef, useState } from 'react'
import Cell from '../models/Cell'
import CellCardComponent from './CellCardComponent';
import Game from '../models/Game';
import '../styles/minesweeper.css'
type Props = {}
/**
 * TODO:
 * Restart buttto, initialize correctly useEffect
 */
const MinesweeperComponent = (props: Props) => {
  const [board, setBoard] = useState<Cell[][]>([]);
  const [gameOver, setGameOver] = useState(false);

  const refGame = useRef<Game>(new Game());

  useEffect(() => {
    const auxBoard = refGame.current.createBoard();
    setBoard(auxBoard);

  }, [])
  
  /**
   * Funciton to modify the cell
   * @param cell to reveal
   */
  function modifyCell(cell : Cell){
    const auxBoard = board;
    const posX = cell.posX;
    const posY = cell.posY;
    auxBoard[posX][posY].setIsRevealed(true);


    if(cell.isBomb){
      alert('Game Over! You hit a bomb.');
      setBoard([...auxBoard]);
      setGameOver(true);
    }

    refGame.current.cellHasAdjacentBombs(cell);

    setBoard([...auxBoard]);
  }

  return (
    <>
      <div className="main-container">
        <div>
          <h2>Minesweeper</h2>
        </div>

        {gameOver && <button onClick={() => setGameOver(false)}>Restart</button>}

        {board.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((cell) => (
              <CellCardComponent
                key={cell.id}
                cell={cell}
                modifyCellParent={modifyCell} 
              />
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default MinesweeperComponent