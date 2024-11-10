import Cell from "./Cell";
/**
 * @author Nabil L. A. <@nalleon>
 */
export default class Game {
    /**
     * Properties 
     */
    board : Cell[][];
    boardBombs : Cell[];

    static BOARD_SIZE = 9;
    static MAX_BOMBS = 9;

    /**
     * Constructor of the class
     */
    constructor() {
        this.board = [];
        this.boardBombs = [];
    }

    /**
     * Function to create the board of the game
     * @returns a bidimensional Cell array 
     */
    public createBoard() : Cell[][] {
        const boardCells : Cell [][] = [];
        let idAux = 1;
        for(let i = 0; i < Game.BOARD_SIZE; i++) {
            boardCells[i] = [];
            for(let j = 0; j < Game.BOARD_SIZE; j++) {
                boardCells[i][j] = new Cell();
                boardCells[i][j].id = idAux;
                boardCells[i][j].posX = i;
                boardCells[i][j].posY = j;
                idAux++;
            }
        }
        this.addBombs(boardCells);
        this.board = boardCells;
        
        return boardCells;
    }

    /**
     * Function to addBombs to the cells of a board
     * @param board to add bombs
     * @returns board with bombs placed
     */
    private addBombs(board : Cell[][]) : Cell[][]{
        let bombsPlaced = 0;

        let bombsArray : Cell[] = [];

        while(bombsPlaced < Game.MAX_BOMBS) {
            const randomPosX = Math.trunc(Math.random() * Game.BOARD_SIZE);
            const randomPosY = Math.trunc(Math.random() * Game.BOARD_SIZE);
            if(!board[randomPosX][randomPosY].isBomb) {
                board[randomPosX][randomPosY].isBomb = true;
                bombsArray.push(board[randomPosX][randomPosY]);
                bombsPlaced++;
            }
        }

        this.boardBombs = bombsArray;
        return board;
    } 


    /**
     * Function to check how many adjacent bomb cells are in the selected cell
     * @param cell to check
     */
    cellHasAdjacentBombs(cell : Cell) {
        if(cell.isBomb){
            return;
        }

        if (cell.isRevealed && cell.neighboringBombs > 0){
            return;
        }

        const posX = cell.posX;
        const posY = cell.posY;
        let areaPoints : Cell [] = [];

        const positionsToCheck = [
            { x: 1, y: 0 },  
            { x: -1, y: 0 }, 
            { x: 0, y: 1 }, 
            { x: 0, y: -1 }, 
            { x: -1, y: 1 }, 
            { x: 1, y: -1 }, 
            { x: -1, y: -1 },
            { x: 1, y: 1 }   
        ];

        for (const { x: x, y } of positionsToCheck) {
            const newX = posX + x;
            const newY = posY + y;

            if (this.checkValidPosition(newX, newY)) {
                const neighborCell = this.findCellByPosition(newX, newY);
                areaPoints.push(neighborCell);
            }
        }
        
        
        for(let i = 0; i < areaPoints.length; i++) {
            if(areaPoints[i].getIsBomb()){
                cell.neighboringBombs++;
            }
        }
    }

    /**
     * Function to find a cell by position
     * @param posX of the position of the cell
     * @param posY of the position of the cell
     * @returns cell in the selected position, new cell if it doesn't exists
     */
    findCellByPosition(posX : number, posY : number) : Cell {
        if (this.checkValidPosition(posX, posY)) {
            return this.board[posX][posY];
        }
        return new Cell();
    }
    
    /**
     * Function to check if the position of the cell is within the board limits
     * @param posX of the position of the cell
     * @param posY of the position of the cell
     * @param board of the game
     * @returns true if posX and posY are within the limits of the board, false otherwise
     */
    checkValidPosition(posX : number, posY : number) : boolean {
        return posX >= 0 && posX < this.board.length && posY >= 0 && posY < this.board[0].length;
    }

    /**
     * Function to reveal all cells in the board
     * @returns the board with all cells revealed
     */
    revealAllCells() : Cell[][] {
        for(let i = 0; i < Game.BOARD_SIZE; i++) {
            for(let j = 0; j < Game.BOARD_SIZE; j++) {
                this.board[i][j].reveal();
                this.board[i][j].unflag();
                this.cellHasAdjacentBombs(this.board[i][j]);
            }
        }
        return this.board;
    }

    /**
     * Function to check if all cells that are not bombs in the board are revealed
     * @returns true if all cells with that condition are revealed, false otherwise
     */

    checkIfAllCellsRevealed() : boolean {
        for(let i = 0; i < Game.BOARD_SIZE; i++) {
            for (let j = 0; j < Game.BOARD_SIZE; j++) {
                const cell = this.board[i][j];
                if (!cell.isBomb && !cell.isRevealed) {
                    return false; 
                }
            }
        }

        return true; 
    }
    /**
     * Function to check if all bombs are flagged/marked
     * @returns true if all are flagged, false otherwise
     */
    checkAllBombsFlagged() : boolean{
        let flaggedBombs = 0;

        for(let i=0; i<this.boardBombs.length; i++){
            if(this.boardBombs[i].isFlagged){
                flaggedBombs++;
            }
        }
        
        if(flaggedBombs === Game.MAX_BOMBS){
            return true;
        }

        return false;
    }

    /**
     * Function to check win
     * @returns true if all bombs are flagged and the rest of cells revealed, false otherwise
     */
    checkWin() : boolean{
        return this.checkAllBombsFlagged() && this.checkIfAllCellsRevealed();
    }

    /**
     * Getters and setters 
     */
    getBoard() : Cell[][] {
        return this.board;
    }
    
    setBoard(board : Cell[][]) {
        this.board = board;
    }
}