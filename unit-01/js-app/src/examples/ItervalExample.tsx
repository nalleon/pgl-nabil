import React, { useState, useRef, useEffect} from 'react'

type Props = {}

const IntervalExample = ({}: Props) => {
    const [contador, setcontador] = useState(20)
    const [stateFecha, setstateFecha] = useState<string>("");
    const [stateBtn, setstateBtn] = useState<boolean>(false);
    const refTimer = useRef<ReturnType<typeof setInterval>>();
    const refNum = useRef<number>(20);
    
    useEffect(() => {
        refNum.current = 20;
    }, []);

    function actualizarFecha(){
        setcontador(refNum.current);
        refNum.current = refNum.current -1;
        console.log(refNum.current);
//        setstateFecha(""+ new Date());
    }

    function iniciarParar(){
        if(!stateBtn){
            refTimer.current = setInterval(actualizarFecha, 1000);
            setstateBtn(true);
        } else {
            clearInterval(refTimer.current);
            setstateBtn(false);
        }

    }

  return (
    <div>
        <h2>IntervalExample</h2>
        <button onClick={iniciarParar}> {stateBtn?"parar":"iniciar"}</button>
        <p>{stateFecha}</p>
        <p>{contador}</p>
    </div>
  )
}

export default IntervalExample