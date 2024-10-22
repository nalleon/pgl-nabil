import React, { useRef, useEffect, useState } from 'react'
import Game from '../model/game.ts'

type Props = {}

function BetNumGame({}: Props) {
    const [historic, sethistoric] = useState<string []>([]);
    const refGame = useRef<Game>({} as Game);
    
    useEffect(() => {
      refGame.current = new Game(10);
    }, [])


    function betGame (){
        let betNum = Math.trunc(Math.random() * 10);
        refGame.current.bet(betNum);
        let historicUpdate = refGame.current.history;
        sethistoric([... historicUpdate]);
    }
    
  return (
        <>
            <h4>Guess num</h4>
            <button type='button' onClick={betGame}>Bet</button>
            {historic}
        </>
    )
}

export default BetNumGame