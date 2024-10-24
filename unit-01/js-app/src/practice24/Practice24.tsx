import React, { useEffect, useRef, useState } from 'react'
import Game from '../model/game.ts';

type Props = {}



const Practice24 = (props: Props) => {
    const inputNumRef = useRef<HTMLInputElement>({} as HTMLInputElement);
    const divResultRef = useRef<HTMLDivElement>({} as HTMLDivElement);
    const [game, setGame] = useState<Game>({} as Game);

    
    useEffect(() => {
      setGame(new Game(10));
    }, []);

    const handleSubmit = () => {
      let userInput = inputNumRef.current;
      let userGuess = parseInt(userInput.value);

      game.bet(userGuess);
      
      let divResultRefInfo = divResultRef.current;
      let results = game.getHistory();
      divResultRefInfo.innerText = results.toString();
    }

  

  return (
    <>
        <div>
            <h4>Guess num</h4>
            <input type="text" ref={inputNumRef}/>
            <button onClick={handleSubmit}>Submit</button>
            <div ref={divResultRef}></div>

            {game.finished && <p>Congratulations! You guessed the number correctly.</p>}
        </div>

    </>
  )
}

export default Practice24