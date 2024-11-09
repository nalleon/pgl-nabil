import React, { useEffect, useRef, useState } from 'react'
import Cell from '../models/Cell'
import CellCardComponent from './CellCardComponent';
import Game from '../models/Game';
import '../styles/minesweeper.css'
import 'bootstrap/dist/css/bootstrap.min.css';


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
   * Function to modify the cell
   * @param cell to reveal
   */
  function modifyCell(cell : Cell){
    const auxBoard = board;

    if(cell.isBomb && !cell.isFlagged){
      setGameOver(true);
      setBoard([...auxBoard]);
      return;
    }

    refGame.current.cellHasAdjacentBombs(cell);
    setBoard([...auxBoard]);
  }

  return (
    <>
      <div className="container text-center vh-100 d-flex flex-column justify-content-center">
        <div className="row justify-content-center mt-5">
          <div className="card col-10 col-sm-12 col-md-10 col-lg-8 bg-dark">
            <div className='mt-3'>
              <h2 className='text-success fw-bold text-uppercase'>Minesweeper</h2>
              {(gameOver) &&
                <h5 className="card-title mt-1 fw-bold text-uppercase text-danger">Game over</h5>
              }
            </div>

            <div className='board m-3'>
              {board.map((row, rowIndex) => (
                <div key={rowIndex} className='row'>
                  {row.map((cell) => (
                    <div className='col p-1'>
                      <CellCardComponent
                        key={cell.id}
                        cell={cell}
                        modifyCellParent={modifyCell} 
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            
            {(gameOver) &&
              <button 
                className='btn btn-danger m-2 mb-3'
                onClick={() => setGameOver(false)}
                >
                  Restart
              </button>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default MinesweeperComponent