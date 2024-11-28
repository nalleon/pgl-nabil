import React, { useState, useRef, useEffect } from 'react'

type Props = {}

function Practice27({}: Props) {

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
          const numUser = parseInt(refInput.current?.value || '0', 10);
          if (isNaN(numUser) || numUser <= 0) {
            return;
          }
          refNum.current = numUser;
            refTimer.current = setInterval(actualizarTime, 1000);
            setstateBtn(true);
        } else {
            clearInterval(refTimer.current!);
            setstateBtn(false);
        }

    }

  return (
    <div>
      <h2>Cronometer</h2>
      <input type="number" name='usertime' id="usertime" ref={refInput}/>
      <button onClick={iniciarParar}> {stateBtn?"parar":"iniciar"}</button>
      <p><b>Remaining time:</b> {time}</p>
    </div>
  )
}

export default Practice27