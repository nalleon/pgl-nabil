export default class Cell {
    id : number;
    isBomb : boolean;
    isRevealed : boolean;
    isFlagged : boolean;
    posX : number;
    posY : number;
    neighboringBombs : number;
    /**
     * Construct of the class
     * @param id of the cell 
     * @param isBomb if the cell is a bomb (true/false)
     */
    constructor() {
        this.id = 0;
        this.isBomb = false;
        this.isRevealed = false;
        this.isFlagged = false;
        this.posX = 0;
        this.posY = 0;
        this.neighboringBombs = 0;
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

    getIsRevealed() {
        return this.isRevealed;
    }
    setIsRevealed(value: boolean) {
        this.isRevealed = value;
    }
    getIsBomb() {
        return this.isBomb;
    }
    setIsBomb(value: boolean) {
        this.isBomb = value;
    }
    getId() {
        return this.id;
    }
    setId(value: number) {
        this.id = value;
    }
    getIsFlagged() {
        return this.isFlagged;
    }
    setIsFlagged(value: boolean) {
        this.isFlagged = value;
    }

    getPosX() {
        return this.posX;
    }
    setPosX(value: number) {
        this.posX = value;
    }
    getPosY() {
        return this.posY;
    }
    setPosY(value: number) {
        this.posY = value;
    }
    getNeighboringBombs() {
        return this.neighboringBombs;
    }
    setNeighboringBombs(value: number) {
        this.neighboringBombs = value;
    }
}