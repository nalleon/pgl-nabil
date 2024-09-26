export class Game {
    constructor() {
        this.valuesArray = ["rock", "paper", "scissor"];
    }

    rndValue() {
        let rndValue = Math.trunc(Math.random() * this.valuesArray.length);
        return rndValue;
    }
    
    resetGame() {
        this.elementChosen = "";
    }


    compareElements(userValue) {
        let computerValue = this.valuesArray[this.rndValue()];
        if (userValue === computerValue) {
            alert('Its a tie!');
        } else if 
            ((userValue === "rock" && computerValue === "scissor") || 
             (userValue === "paper" && computerValue === "rock") || 
             (userValue === "scissor"&& computerValue === "paper")){
                alert('You win!');
        } else{
            alert('Computer wins!');
        }
    }
    
}
