import Cell from "./cell.ts";


export default class Game31 {
    public cellsArray:Cell[];
    public numberArray : number[];
    public currentNumber : number;
    public revealedNumbers : number[];
    public totalNumber :  number ;
    public attempts : number;

    constructor(totalNumber: number=8){
        this.totalNumber = totalNumber;
        this.numberArray = [1,2,3,4,5,6,7,8];
        this.currentNumber = 1;
        this.revealedNumbers = [];
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

        for (let i = 0; i < this.numberArray.length; i++) {
            const value = this.numberArray[i]; 
            const cell = new Cell(i, value);   
            this.cellsArray[i] = cell;       
        }

        this.revealedNumbers = []; 
        this.currentNumber = 1; 
        this.attempts = 0;

        return this.cellsArray;
    }


    public bet(index : number){
        const selectedCell = this.cellsArray[index];

        if (this.revealedNumbers.includes(selectedCell.value)) {
            return;
        }

        this.attempts++;

        if (selectedCell.value === this.currentNumber){
            selectedCell.makeVisible();
            this.revealedNumbers[index] = selectedCell.value;
            this.currentNumber++;
        }

    }

    public checkWin(){
        return this.revealedNumbers.length === this.totalNumber;
    }

    public showNum(index : number){
        return this.cellsArray[index].value;
    }
    
}
