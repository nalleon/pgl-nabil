export default class User {
    
    public static initialId = 0;
    public id : number;
    public name: string;

    constructor (name : string) {
        this.id = 0;
        this.name = name;
    }

}