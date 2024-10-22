import React, { useState, useRef, useEffect } from 'react'

type Props = {}

function practice27({}: Props) {

    const [time, settime] = useState(20);
    const [stateBtn, setstateBtn] = useState<boolean>(false);
    const refTimer = useRef<ReturnType<typeof setInterval>>();
    const refNum = useRef<number>(0);
    const refInput = useRef<HTMLInputElement>(null);


    useEffect(() => {
      if (time === 0 && stateBtn){
        clearInterval(refTimer.current);
        setstateBtn(false);
      }  
      
    }, [time, stateBtn]);


    const actualizarTime = () =>{
      if(refNum.current > 0){
        refNum.current--;
        settime(refNum.current);
      }
    }

    function iniciarParar(){
        if(!stateBtn){
           refNum.current = 20;
           // refTimer.current = setInterval(actualizarFecha, 1000);
            setstateBtn(true);
        } else {
            clearInterval(refTimer.current);
            setstateBtn(false);
        }

    }

  return (
    <div>
    <h2>Cronometro</h2>
    <input type="text" />
    <button onClick={iniciarParar}> {stateBtn?"parar":"iniciar"}</button>
    <p>{time}</p>
    </div>
  )
}

export default practice27