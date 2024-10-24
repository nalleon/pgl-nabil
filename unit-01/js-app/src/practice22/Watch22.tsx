import React, { act, useEffect, useState } from 'react'

type Props = {
    zone ?: string;
}

const Watch22 = (props: Props) => {
    const zoneStr = props.zone ?? "Europe/Madrid";
    const date = new Date().toLocaleDateString( "es-ES",{timeZone: zoneStr});
    const timeString = new Date().toLocaleTimeString("es-ES",{timeZone: zoneStr});
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
            <h2>Time at: {zoneStr}</h2>
            <p>{actualDate}</p>
            <p>{timeString}</p>
        </>
    );
}

export default Watch22;