import React, { useState } from 'react'

type Props = {
    numTable : number;
}

const Practice09 = (props: Props) => {
    const [counter, increment] = useState(1);
    const numTable = props.numTable ?? 1;

    function incrementCounter(){
        increment(counter+1);
        if (counter === 10){
            increment(1);
        }
    }
    return (
            <>
                <div>
                    <h2>Tabla del {numTable}</h2>
                    <p>{numTable}*{counter} = {numTable*counter}</p>
                    <button onClick={incrementCounter}> {numTable}*{counter+1} = {numTable*(counter+1)} </button>
                </div>

            </>
    )
}

export default Practice09