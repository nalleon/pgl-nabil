import Cell from "./Cell";
/**
 * @author Nabil L. A. <@nalleon>
 */
export default class Game {
    board : Cell[][];
    static BOARD_SIZE = 9;
    static MAX_BOMBS = 9;

    /**
     * Constructor of the class
     */
    constructor() {
        this.board = [];
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

        while(bombsPlaced < Game.MAX_BOMBS) {
            const randomRow = Math.trunc(Math.random() * Game.BOARD_SIZE);
            const randomCol = Math.trunc(Math.random() * Game.BOARD_SIZE);
            if(!board[randomRow][randomCol].isBomb) {
                board[randomRow][randomCol].isBomb = true;
                bombsPlaced++;
            }
        }
        return board;
    } 


    /**
     * Function to check how many adjacent bomb cells are in the selected cell
     * @param cell to check
     */
    cellHasAdjacentBombs(cell : Cell) {
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
     * Getters and setters 
     */
    getBoard() : Cell[][] {
        return this.board;
    }
    
    setBoard(board : Cell[][]) {
        this.board = board;
    }
}