import React, { useState } from 'react'

type Props = {}

const Practice10 = (props: Props) => {
    const [num, setNum] = useState([]);
    
    function addNum(){
        const rndNum = Math.trunc(Math.random() * 100)+1;

        setNum((prevNum) => [...prevNum, rndNum]);
    }


  return (
    <>
        <div>
            <br></br>
            <p>{JSON.stringify(num)}</p>
            <button onClick={addNum}> Add num </button>
        </div>

    </>
    
  )
}

export default Practice10