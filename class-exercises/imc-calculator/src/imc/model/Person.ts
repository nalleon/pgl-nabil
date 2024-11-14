
/**
 * @author Nabil León Álvarez
 */
export default class Person {

    public static initialId = 1;
    public id : number = 0;
    public name : string = "";
    public surname : string = "";
    public age : number = 0;
    public height : number = 0;
    public weight : number = 0;
    public imc : number = 0;

    public static maxRangeValues = 100; 

    // default constructor
    constructor(id : number, name : string, surname : string, age : number, height : number, weigth : number) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.height = height;
        this.weight = weigth;
    }

    public calculateIMC() {
        if(this.height === 0 || this.weight === 0) {
            return 0;
        }
        
        let heightMeter = this.height/100;
        return this.weight / (heightMeter*heightMeter);
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
    public getWeight(): number {
        return this.weight;
    }
    public setWeight(weigth: number): void {
        this.weight = weigth;
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