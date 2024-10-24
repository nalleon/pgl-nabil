import Cell from "./cell.ts";


export default class Game31 {
    public cellsArray: Array<Cell[]>;
    public numberArray : number[] = [];
    public currentNumber : number;
    public revealedNumbers : number[] = [];
    public totalNumber :  number ;
    public attempts : number;

    constructor(totalNumber: number=8){
        this.totalNumber = totalNumber;
        this.numberArray = [1,2,3,4,5,6,7,8];
        this.currentNumber = 1;
        this.revealedNumbers = [];
        this.attempts = 0;
        this.cellsArray = new Array<Cell[]>();
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
            
            let cell = new Cell(i, j);

        }
    }


    public bet(index : number){
        if (this.revealedNumbers.includes(this.numberArray[index])) {
            return;
        }

        this.attempts++;

        if (this.numberArray[index] === this.currentNumber){
            const auxArray = this.numberArray[index];
            this.revealedNumbers.push(auxArray);
            this.currentNumber++;
        }

    }

    public checkWin(){
        return this.revealedNumbers.length === this.totalNumber;
    }

    public showNum(index : number){
        return this.numberArray[index];
    }
    
}
