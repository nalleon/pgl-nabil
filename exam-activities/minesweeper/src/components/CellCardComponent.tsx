import React from 'react'
import Cell from '../models/Cell';
import '../styles/cell.css';
import useState from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
  modifyCellParent : (cell : Cell) => void;
  cell : Cell;
}

/**
 * TODO:
 * if cell if isFlagged show M else none
 * if cell is bomb and isReveal show B 
 */

const CellCardComponent = (props: Props) => {
  const { cell, modifyCellParent } = props;

  const handleCellClick = () => {
    if (!cell.isRevealed && !cell.isFlagged) {
      cell.reveal();
      modifyCellParent(cell); 
    }
  };


  const handleRightClick = (event: React.MouseEvent) => {
    event.preventDefault(); 
    if (!cell.isRevealed) {
      cell.isFlagged = true;
      modifyCellParent(cell); 
    }
  };

  return (
    <>

    <div
      className={`cell 
                  ${cell.isRevealed ? 'revealed' : ''} 
                  ${cell.isFlagged ? 'flagged' : ''} 
                  ${cell.isBomb && cell.isRevealed ? 'bomb' : ''}
                  ${cell.isBomb ? 'bombtest' : ''}`
                }
      onClick={handleCellClick}
      onContextMenu={handleRightClick} 
    >
      {(cell.isFlagged) && 'M'} 

      {(cell.isRevealed && cell.isBomb) && 'B'}

      {(cell.isRevealed && !cell.isBomb && !cell.isFlagged && cell.neighboringBombs > 0) && cell.neighboringBombs}
      </div>
    </>
  )
}

export default CellCardComponent