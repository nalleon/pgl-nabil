import React from 'react'
import Cell from '../models/Cell';
import '../styles/cell.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * @author Nabil L. A. <@nalleon>
 */

type Props = {
  modifyCellParent : (cell : Cell) => void;
  cell : Cell;
}

const CellCardComponent = (props: Props) => {
  const { cell, modifyCellParent } = props;

  const handleCellClick = (event: React.MouseEvent) => {
    event.preventDefault(); 
    if (!cell.isRevealed && !cell.isFlagged) {
      cell.reveal();
      modifyCellParent(cell); 
    }
  };


  const handleRightClick = (event: React.MouseEvent) => {
    event.preventDefault(); 

    if (!cell.isRevealed && !cell.isFlagged) {
      cell.flag();
    } else if (cell.isFlagged) {
      cell.unflag();
    } 
    modifyCellParent(cell); 
  };

  return (
    <>

    <div
      className={`cell 
                  ${cell.isRevealed ? 'revealed' : ''} 
                  ${cell.isFlagged ? 'bg-warning' : ''} 
                  ${cell.isBomb && cell.isRevealed ? 'bg-danger' : ''}
                  ${cell.isBomb ? 'bombtest' : ''} 
                  text-dark fw-bold`
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