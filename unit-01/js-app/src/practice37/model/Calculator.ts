export default class Calculator {

    constructor(){}
    public generateRndNum (){
        let rndNum = Math.trunc(Math.random() * 100) + 10;
        return rndNum;
    } 

    public descomposeNum(num){
        let descomposeStr = "";

        if(num <= 2 || this.checkPrime(num)){
            descomposeStr = "1 * " + num;
            return descomposeStr;
        }

        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                descomposeStr += i + " ";
            }
        }
        return descomposeStr;
    }


    public checkPrime(num){
        if (num < 2) {
            return false;
        }
        if (num == 2) {
            return true;
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}