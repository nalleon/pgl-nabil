export default class Game {
    public secret : number;
    public history :  string[];
    public finished : boolean;
    public maxValue : number;
    constructor(maxValue){
      this.maxValue = maxValue;
      this.secret = Math.trunc(Math.random() * maxValue);
      this.history = [];
      this.finished = false;
    }


    public bet(num : number) : boolean {
        if (!this.finished){
            if (num == this.secret){
                this.finished = true;
                this.history.push(`You won: num was ${this.secret} in ${this.history.length} attempts\n`);
            } else if (num < this.secret){
                this.history.push(`Bet: ${num} < secret\n`);
            } else {
                this.history.push(`Bet: ${num} > secret\n`);
            }
            
            return true;
        } 
        return false;
    }

    public getHistory = () :string[]  => {
        return this.history;
    }

}