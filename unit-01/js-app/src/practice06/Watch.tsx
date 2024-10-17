import React, { useEffect } from 'react'

type Props = {
    zone ?: string;
}

const Watch = (props: Props) => {
    const zoneStr = props.zone ?? "Europe/Madrid";
    const date = new Date().toLocaleDateString( "es-ES",{timeZone: zoneStr});
    const timeString = new Date().toLocaleTimeString("es-ES",{timeZone: zoneStr});
    /* 
    useEffect(() =>{
        const timerID = setInterval(
            tick, 
            1000
        );

    }, []);

   
   /**  function tick() {
        const newDate = " " + new Date();
        setActualDate(newDate);
    }
*/
    return (
        <>
            <h2>Time at: {zoneStr}</h2>
            <p>{date}</p>
            <p>{timeString}</p>
        </>
    );
}

export default Watch;