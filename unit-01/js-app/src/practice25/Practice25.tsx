import React, { useState } from 'react'

type Props = {}

const Practice25 = (props: Props) => {
    const [option, setoption] = useState(true);
    
    function getInputType(): void {
        throw new Error('Function not implemented.')
    }

  return (
    <>
        <div className="main-container">
            <button onClick={getInputType}>Submit</button>
            {option}

        </div>
    </>
  )
}

export default Practice25