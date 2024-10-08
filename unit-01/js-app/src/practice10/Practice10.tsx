import React, { useState } from 'react'

type Props = {}

const Practice10 = (props: Props) => {
    const [arraynum, setArraynum] = useState<Array<Number>>([]);

    function addNum(){
        const rndNum = Math.trunc(Math.random() * 100)+1;
        setArraynum( [...arraynum, rndNum]);
    }

  return (
    <>
        <div>
            <br></br>
            <p>{JSON.stringify(arraynum)}</p>
            <button onClick={addNum}> Add num </button>
        </div>

    </>
    
  )
}

export default Practice10