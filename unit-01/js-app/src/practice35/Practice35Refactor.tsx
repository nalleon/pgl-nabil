import React, { useEffect, useState } from 'react'


const Practice35Refactor = (props: Props) => {
    const [message, setMessage] = useState("");

    const handleInputChange = (text) => {
      setMessage("input A dice: " + text);
    };
  
    const handleButtonClick = () => {
      setMessage("pulsado botón en B");
    };

    function sendInfoChild(data: string){
        setMessage(data);
    }
  
    return (
      <div>
        <h2>Estado del padre: {message}</h2>
        <ComponentA onInputChange={handleInputChange} />
        <ComponentB onButtonClick={handleButtonClick} />
      </div>
    );
}

export default Practice35Refactor


type Props = {

    infoDelPadreAlHijo?: number,
    sendInfoMessage: (dato: string) => void
}

const ComponentA = (props: Props) => {
    useEffect(() => {
        props.sendInfoMessage("dato: " + Math.random());
    }, [])

    function enviar(){
        props.sendInfoMessage("data: " + Math.random());
    }
    
  return (

    <div>Component A
        <div>
            MI padre dice: {props.infoDelPadreAlHijo}
            <button type="button" onClick={enviar} >Enviar</button>
        </div>

    </div>
  )
}




const ComponentB = (props: Props) => {
    return (
      <div>Componente B</div>
    )
  }