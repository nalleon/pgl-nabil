export class Game {
    constructor() {
        this.valuesArray = ["rock", "paper", "scissor"];
        this.elementChosen = "";
    }

    rndValue() {
        let rndValue = Math.trunc(Math.random() * this.valuesArray.length);
        return rndValue;
    }

    selectElement(elementPos) {
        let aux = this.words[elementPos];
        this.elementChosen = aux; 
        return aux;
    }

    resetGame() {
        this.elementChosen = "";
    }
    
}
