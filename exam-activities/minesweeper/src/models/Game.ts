import Cell from "./Cell";

export default class Game {
    board : Cell[][];
    static BOARD_SIZE = 9;
    static MAX_BOMBS = 9;

    /**
     * Constructor of the class
     */
    constructor() {
        this.board = this.createBoard();
    }

    /**
     * Function to create the board of the game
     * @returns a bidimensional Cell array 
     */

    private createBoard() : Cell[][] {
        const boardCells : Cell [][] = [];
        let id = 1;
        for(let i = 0; i < Game.BOARD_SIZE; i++) {
            boardCells[i] = [];
            for(let j = 0; j < Game.BOARD_SIZE; j++) {
                boardCells[i][j] = new Cell(id);
                id++;
            }
        }

        this.addBombs(boardCells);

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


    cellHasAdjacentBombs(cell : Cell) : boolean {

        return true;
    }
    
}