import React, { useEffect, useState } from 'react'

type Props = {}

const Practice21 = (props: Props) => {
    const [actualDate, setActualDate] = useState<string>("");
    
    useEffect(() =>{
        const timerID = setInterval(
            tick, 
            1000
        );
        return () => clearInterval(timerID);
    }, []);

    function tick() {
        const newDate = " " + new Date();
        setActualDate(newDate);
    }

  return (
    <div>
        <h3>Example of dinamic watch</h3>    
        {actualDate}
    </div>
  )
}

export default Practice21