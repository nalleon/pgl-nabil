import React, { useEffect, useRef, useState } from 'react'

type Props = {}

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

    getGuesses = () => {
      return this.guesses;
    }
}

const Practice24 = (props: Props) => {
    const inputNum = useRef<HTMLInputElement>({} as HTMLInputElement);
    const divResult = useRef<HTMLDivElement>({} as HTMLDivElement);
    const [game, setGame] = useState<Game>({} as Game);
    const [restart, setRestart] = useState(true);

    
    useEffect(() => {
      let game = new Game();
      setGame(game);
    }, []);

    const handleSubmit = () => {
        let userInput = inputNum.current;
        let userGuess = Number(userInput.value);

        game.guess(userGuess);
        
        let divResultInfo = divResult.current;
        let results = game.getGuesses().toString;
        divResultInfo.innerText = results();
    }

    const restartGame = () =>{
        setRestart(true);
      }
  

  return (
    <>
        <div>
            <h4>Guess num</h4>
            <input type="text" ref={inputNum}/>
            <button onClick={handleSubmit}>Submit</button>
            <div ref={divResult}></div>

            <button onClick={restartGame}>Restart</button>


            {game.finished && <p>Congratulations! You guessed the number correctly.</p>}
        </div>

    </>
  )
}

export default Practice24