import React, { useEffect, useState } from 'react'

/**
 * TODO: practice 32-36
 */

const Practice35 = () => {
    const [paraHijoModificarPadre, setParaHijoModificarPadre] = useState("");

    function enviarInfoHijo(dato: string){
        setParaHijoModificarPadre(dato);
    }

  return (
    <div>
        Practice35
        <ComponenteA infoDelPadreAlHijo={4}  comoTuquieras={enviarInfoHijo}/>
    {  // <ComponenteB />  
    }

    Recibido desde componente hijo: {paraHijoModificarPadre}
    </div>
  )
}

export default Practice35

type Props = {

    infoDelPadreAlHijo?: number,
    comoTuquieras: (dato: string) => void
}

const ComponenteA = (props: Props) => {
    useEffect(() => {
        props.comoTuquieras("dato " + Math.random());
    }, [])

    function enviar(){
        props.comoTuquieras("dato " + Math.random());
    }
    
  return (

    <div>Compoente A
        <div>
            MI padre dice: {props.infoDelPadreAlHijo}
            <button type="button" onClick={enviar} >Enviar</button>
        </div>

    </div>
  )
}




const ComponenteB = (props: Props) => {
    return (
      <div>Componente B</div>
    )
  }