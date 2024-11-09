import Cell from "./Cell";

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


    cellHasAdjacentBombs(cell : Cell) {
        const posX = cell.posX;
        const posY = cell.posY;
        let areaPoints : Cell [] = [];

        try {
        // for horizontal check
        let horizontalCheck1 = posX+1;
        const rightCell = this.findCellByPosition(horizontalCheck1, posY);
        areaPoints.push(rightCell);

        let horizontalCheck2 = posX-1;
        const leftCell = this.findCellByPosition(horizontalCheck2, posY);
        areaPoints.push(leftCell);

        // for vertical check

        let verticalCheck1 = posY+1;
        const bottomCell = this.findCellByPosition(posX, verticalCheck1);
        areaPoints.push(bottomCell);

        let verticalCheck2 = posY-1;
        const topCell = this.findCellByPosition(posX, verticalCheck2);
        areaPoints.push(topCell);

        // for diagonalLeft check

        let firstHorizontalPointDiagonal = posX-1;
        let firstVerticalPointDiagonal = posY+1;
        const botttomLeftCell = this.findCellByPosition(firstHorizontalPointDiagonal, firstVerticalPointDiagonal);

        areaPoints.push(botttomLeftCell);

        let secondHorizontalPointDiagonal = posX+1;
        let secondVerticalPointDiagonal = posY-1;
        const topRightCell = this.findCellByPosition(secondHorizontalPointDiagonal, secondVerticalPointDiagonal);

        areaPoints.push(topRightCell);

        // for diagonalRight check
        let firstHorizontalPointSecondDiagonal = posX-1;
        let firstVerticalPointSecondDiagonal = posY-1;
        const botttomRightCell = this.findCellByPosition(firstHorizontalPointSecondDiagonal, firstVerticalPointSecondDiagonal);

        areaPoints.push(botttomRightCell);

        let secondHorizontalPointSecondDiagonal = posX+1;
        let secondVerticalPointSecondDiagonal = posY+1;
        const topLeftCell = this.findCellByPosition(secondHorizontalPointSecondDiagonal, secondVerticalPointSecondDiagonal);

        areaPoints.push(topLeftCell);


        console.log(areaPoints);
        for(let i = 0; i < areaPoints.length; i++) {
            if(areaPoints[i].getIsBomb()){
                console.log(areaPoints[i]);
                cell.neighboringBombs++;
            }
        }

        


        console.log(cell.getNeighboringBombs());
        } catch (e) {
            console.log(e);
        }
    }

    findCellByPosition(posX : number, posY : number) : Cell {
        const boardCells = this.board
        let cellFound = new Cell;
        try {
            cellFound = boardCells[posX][posY];
        } catch (e) {
            return cellFound;
        }
        return cellFound;

    }
    

    /**
     * Getters and setters 
     */
    get Board() : Cell[][] {
        return this.board;
    }
    
    set Board(value : Cell[][]) {
        this.board = value;
    }
}