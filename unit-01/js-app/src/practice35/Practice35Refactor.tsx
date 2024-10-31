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
        <ComponentA sendInfoMessage={handleInputChange}  />
        <ComponentB onButtonClick={handleButtonClick} />
      </div>
    );
}

export default Practice35Refactor


type Props = {
    sendInfoChild?: number,
    sendInfoMessage?: (data: string) => void
}

const ComponentA = (props: Props) => {
    useEffect(() => {
        if (props.sendInfoMessage) {
            props.sendInfoMessage("data: " + Math.random());
        }
    }, [])


    function enviar(){
      if (props.sendInfoMessage) {
        props.sendInfoMessage("data: " + Math.random());
      }
    }
    
  return (

    <div>Component A
        <div>
            MI padre dice: {props.sendInfoChild}
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