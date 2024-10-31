export default class Person {

    public id : number;
    public name : string;
    public surname : string;
    public age : number;
    public height : number;
    public weigth : number;
    public imc : number;

    constructor() {

    }

    public calculateIMC() {
        this.imc = this.weigth / (this.height^2);
    }
     
    //Getters and setters
    public getId(): number {
        return this.id;
    }
    public setId(id: number): void {
        this.id = id;
    }
    public getName(): string {
        return this.name;
    }
    public setName(name: string): void {
        this.name = name;
    }
    public getSurname(): string {
        return this.surname;
    }
    public setSurname(surname: string): void {
        this.surname = surname;
    }
    public getAge(): number {
        return this.age;
    }
    public setAge(age: number): void {
        this.age = age;
    }
    public getWeigth(): number {
        return this.weigth;
    }
    public setWeigth(weigth: number): void {
        this.weigth = weigth;
    }
    public getImc(): number {
        return this.imc;
    }
    public setImc(imc: number): void {
        this.imc = imc;
    }
    public getHeight(): number {
        return this.height;
    }
    public setHeight(height: number): void {
        this.height = height;
    }
}