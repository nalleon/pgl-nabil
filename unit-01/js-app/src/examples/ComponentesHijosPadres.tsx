import React, { useState } from 'react'

type Props = {}

    const PadreModificadoPorHijo = () => {
        const [state, setstate] = useState<number>(0);
        const [arrNum, setArrNum] = useState([]);

        function modificarState(dato:number){
            setstate(dato);
        }

        return (
            <div>
                <HijoModificaPadre modificarstatepadre={modificarState}
                    prueba={setArrNum}/>
                <h4>dato recibido de hijo: {state}</h4>
            </div>
        )
    }

    interface Iprops{
        modificarstatepadre: Function;
        prueba ?: Function;
    }

    export const HijoModificaPadre = (props:Iprops) => {
        function agregar(){
            const { prueba } = props;
            if(prueba){
                //setArrNum([...arrNum, Math.random()]);
            } else {
                console.log("No hay función para pasar info");
            }
        }

        function enviarinfo(){
            const {modificarstatepadre } = props;
            let num = Math.random();
            modificarstatepadre(num);
        }

    return (
            <div>
                <button onClick={enviarinfo}>modificar padre</button>
            </div>
        )
    }

export default PadreModificadoPorHijo