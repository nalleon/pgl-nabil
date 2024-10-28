import Cell from "./cell.ts";


export default class Game31 {
    public cellsArray:Cell[];
    public numberArray : number[];
    public currentNumber : number;
    public revealedCells : Cell[];
    public totalNumber :  number ;
    public attempts : number;

    constructor(totalNumber: number=8){
        this.totalNumber = totalNumber;
        this.numberArray = [];
        this.currentNumber = 1;
        this.revealedCells = new Array<Cell>();
        this.attempts = 0;
        this.cellsArray = new Array<Cell>();
    }
    
    /** 
     * Function to generate shuffle numbers
     */
    public generateNumbers() {
        for (let i = 0; i < this.totalNumber ; i++){
            const j = Math.floor(Math.random() * (i + 1));
            const k = Math.floor(Math.random() * (i + 1));
            let temp = this.numberArray[k];
            this.numberArray[k] = this.numberArray[j];
            this.numberArray[j] = temp;
        }
        return this.numberArray;
    }

    /**
     * Function to initialize the cells
     */

    public initializeCells(){
        this.numberArray = this.generateNumbers();
        this.cellsArray = [];
        this.revealedCells = []; 
        this.currentNumber = 1; 
        this.attempts = 0;

        for (let i = 0; i < this.numberArray.length; i++) {
            const value = this.numberArray[i]; 
            const cell = new Cell(i, value);   
            this.cellsArray[i] = cell;       
        }

        return this.cellsArray;
    }

    /**
     * Function to check the bet of one of the cells
     * @param index of the cell to check
     */

    public bet(index : number){
        const selectedCell = this.cellsArray[index];

        if (this.revealedCells.includes(selectedCell)) {
            return;
        }

        //console.log(this.attempts);
        console.log(this.currentNumber);

        if (selectedCell.value === this.currentNumber){
            selectedCell.makeVisible();
            this.revealedCells[index] = selectedCell;
            this.currentNumber++;
        }

        this.attempts++;

    }

    /**
     * Methos to check if the game is over;
     */
    public checkWin(){
        return this.revealedCells.length === this.totalNumber;
    }

    /**
     * Method to show a cell
     * @param index of the cell
     */

    public showNum(index : number){
        this.cellsArray[index].makeVisible();
    }
    
    /**
     * Method to hide a cell
     * @param index of the cell 
     */
    public hideNum(index : number){
        this.cellsArray[index].makeHidden();
    }
    
}
