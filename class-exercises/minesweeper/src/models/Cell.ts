/**
 * @author Nabil León Álvarez
 */
export default class Cell {
    public id : number = 0
    public numValue : number = 0;
    public isBomb : boolean = false;
    public isOpen : boolean = false;
    public positionX : number = 0;
    public positionY : number = 0;

    constructor (id=0,numValue = 0, isBomb = false, positionX = 0, positionY=0){
        this.id=id;
        this.isBomb=isBomb;
        this.numValue=numValue;
        this.positionX=positionX;
        this.positionY=positionY;
        this.isOpen = false;
    }

    /**
     * Getters and setters
     */

    public getIsBomb(){
        return this.isBomb;
    }

    public setIsBomb(isBomb : boolean){
        this.isBomb = isBomb;
    }

    public getIsOpen(){
        return this.isOpen;
    }

    public setIsOpen(isOpen : boolean){
        this.isOpen = isOpen
    }

    


    
}