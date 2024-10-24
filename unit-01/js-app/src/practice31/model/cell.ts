export default class Cell {
    public id : number;
    public isVisible :  boolean ;
    public value : number;

    constructor(id : number, value : number){
        this.id = id;
        this.isVisible = true;
        this.value = value;
    }

}
