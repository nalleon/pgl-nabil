export default class Cell {
    id : number;
    isBomb : boolean;
    isRevealed : boolean;
    isFlaged : boolean;
    /**
     * Construct of the class
     * @param id of the cell 
     * @param isBomb if the cell is a bomb (true/false)
     */
    constructor(id : number, isBomb : boolean) {
        this.id = id;
        this.isBomb = isBomb;
        this.isRevealed = false;
        this.isFlaged = false;
    }

    /**
     * Function to reveal the cell
     */
    reveal() {
        this.isRevealed = true;
    }

    /**
     * Function to check if the cell revealed is a bomb
     * @returns true if it is, false otherwise
     */

    isBombRevealed() {
        return this.isRevealed && this.isBomb;
    }


    /**
     * Getters and setters
     */

    get IsRevealed() {
        return this.isRevealed;
    }
    set IsRevealed(value: boolean) {
        this.isRevealed = value;
    }
    get IsBomb() {
        return this.isBomb;
    }
    set IsBomb(value: boolean) {
        this.isBomb = value;
    }
    get Id() {
        return this.id;
    }
    set Id(value: number) {
        this.id = value;
    }
    get IsFlaged() {
        return this.isFlaged;
    }
    set IsFlaged(value: boolean) {
        this.isFlaged = value;
    }

}