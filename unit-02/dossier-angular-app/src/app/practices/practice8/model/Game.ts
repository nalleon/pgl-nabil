export class Game {
  valuesArray: string[] = ["rock", "paper", "scissor"];
  finished : boolean = false;
  result : string = "";
  userSelection : string = "";
  computerSelection : string = "";

  rndValue(){
    return this.valuesArray[Math.trunc(Math.random() * this.valuesArray.length)];
  }

  compareElements(userValue : string) {
    let computerValue = this.rndValue();

    this.userSelection = userValue;
    this.computerSelection = computerValue;

    if (userValue === computerValue) {
      this.result ='Its a tie!';
    } else if
        ((userValue === "rock" && computerValue === "scissor") ||
          (userValue === "paper" && computerValue === "rock") ||
          (userValue === "scissor"&& computerValue === "paper")){
            this.result = 'You win!';
    } else{
      this.result = 'Computer wins!';
    }
    this.finished = true;
}
}
