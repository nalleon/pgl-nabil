/**
 * @author Nabil León Álvarez
 */

import Cell from "./Cell";

export default class Game {
    public arrCell : Cell[] = [];
    public static MAX_CELLS = 79;
    public static MAX_BOMBS = 6; 

    constructor (arrCell = []   ){
        this.arrCell = arrCell;
    }

    public generateCellsContent(){
        for (let i=0; i<Game.MAX_CELLS; i++){
            for (let j=0; j<Game.MAX_CELLS; j++){
                let id = i;
                let numValue = 1;
                let bomb = false;
                let cell = new Cell(id, numValue, bomb);

                this.arrCell.push(cell);
            }
        }
        return this.arrCell;
    }

    public addBombs(cells : Cell[]){
        for (let i =0; i<Game.MAX_BOMBS; i++){
            let bombPos = Math.trunc( Math.random() * 79);
            if (cells[bombPos].isBomb === false){
                let cellBomb = cells[bombPos];
                cellBomb.setIsBomb(true);
            }
        }

        return cells;
    }

}