export class Persona {

    constructor(nom, ape, edad){
        this.nombre = nom;
        this.apellido = ape;
        this.edad = edad;
    }


    showData(){
        return this.nombre + " " + this.apellido + ", " + this.edad + " años";
    }

}