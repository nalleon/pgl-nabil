import React from 'react'
import Cell from '../models/Cell';
import '../styles/cell.css';
import useState from 'react';
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
      

      modifyCellParent(cell); 
    }
  };


  const handleRightClick = (event: React.MouseEvent) => {
    event.preventDefault(); 

    if (!cell.isRevealed) {
      cell.isFlagged = true;
    
      const flaggedCell = cell; 
      modifyCellParent(flaggedCell); 
    }
  };

  return (
    <>
    <div
      className={`cell ${cell.isRevealed ? 'revealed' : ''} ${cell.isFlagged ? 'flagged' : ''} 
      ${cell.isBomb && cell.isRevealed ? 'bomb' : ''} ${cell.isBomb ? 'bombtest' : ''}`}
      onClick={handleCellClick}
      onContextMenu={handleRightClick} 
    >
      {cell.isFlagged && !cell.isRevealed && 'M'}

      {cell.isRevealed && cell.isBomb && 'B'}


      </div>
    </>
  )
}

export default CellCardComponent