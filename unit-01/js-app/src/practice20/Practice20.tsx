import React, { useEffect, useState } from 'react'
import './practice20.css'

class Game {
    private hiddenNum : number;
    private guesses : string[];
    public finished : boolean = false;

    constructor(max:number = 10){
      this.hiddenNum = Math.trunc(Math.random() * max);
      this.guesses = [];
      this.finished = false;
    }

    guess = (guess: number): boolean => {
      if (this.finished) {
        return false;
      }

      let ocurrence = "";
      if (guess < this.hiddenNum) {
        ocurrence = "<";
      } else if (guess > this.hiddenNum) {
        ocurrence = ">";
      } else {
        ocurrence = "=";
        this.finished = true;
      }

      let message = guess + " " + ocurrence + " hidden number";
      this.guesses.push(message);
      return true;
    }
    
    /**
     * 
   
    guess(guess: number) : boolean {
      if(this.finished){
        return false;
      }

      let ocurrence = "";
      if(guess < this.hiddenNum){
        ocurrence = "<";
      } else if(guess > this.hiddenNum){
        ocurrence = ">";
      } else {
        ocurrence = "=";
        this.finished = true;
      }

      let message = guess + " " +ocurrence + " hidden number";
      this.guesses.push(message);
      return true;
    }
*/
    getGuesses = () => {
      return this.guesses;
    }

    getFinished = () =>{
      return this.finished;
    }

}



type Props = {}
/**
 * button to restart
 * use effect 
 */
const Practice20 = (props: Props) => {
    const [game, setGame] = useState<Game>({} as Game);
    const [restart, setRestart] = useState(true);
    const [numBet, setNumBet] = useState<number>(0);
    const [finished, setfinished] = useState<boolean>(false);
    const [ocurrence, setocurrence] = useState('');
    let arr = [0,1,2,3,4,5,6,7,8,9];


    useEffect(() => {
      let game = new Game(arr.length);
      setGame(game);

      if (restart) {
        setRestart(false); 
      }
      console.log(numBet);
    }, [restart]);


    const handleClick = (num: number) => {
        game.guess(num);
        console.log({...game});
        setGame({...game} as Game);
    }
    
    const restartGame = () =>{
      setRestart(true);
    }

  return (
    <>
        <h2>Guess num:</h2>
        {arr.map(num => {
            return <button key={num} onClick={() => handleClick(num)}> {num}</button>
        })}

        <button onClick={restartGame}>Restart</button>

        <p>{ocurrence}</p>

        {game.finished && <p>Congratulations! You guessed the number correctly.</p>}
    </>
  )
}

export default Practice20