import React, { useState } from 'react'

type Props = {}

const Practice09 = (props: Props) => {
    const [counter, increment] = useState(1);


    function incrementCounter(){
        increment(counter+1);
        if (counter === 10){
            increment(1);
        }
    }
    return (
            <>
                <div>
                    <h2>Tabla del 2</h2>
                    <p>2*{counter} = {2*counter}</p>
                    <button onClick={incrementCounter}> 2*{counter+1} = {2*(counter+1)} </button>
                </div>

            </>
    )
}

export default Practice09