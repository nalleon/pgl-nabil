import React, { useEffect, useState } from 'react'
import Watch from '../practice06/Watch.tsx'
import Watch22 from './Watch22.tsx';

type Props = {}

const Practice22 = (props: Props) => {

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
        <>
          <Watch22 zone="Europe/Madrid" />
          <Watch22 zone="America/New_York" />
          <Watch22 zone="Europe/London" />
        </>
    )
}

export default Practice22