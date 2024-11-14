import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CapitalCard from './CapitalCard.tsx';

type Props = {}

interface IRootObject {
    id: string;
    nombre: string;
    datos: IDato[];
    foto: string;
}

interface IDato {
    anio: number;
    poblacion: number;
}


/**
 * json-server --watch capitals.json --port 3001
 */
const CapitalList = () => {
    const [capitalList, setCapitalList] = useState<IRootObject[]>([]);
    const uri: string = "http://localhost:3000/"
    const dataLength = 23; 

    useEffect(() => {
        getCapitalInfo(uri)
    }, []);

    /**
     * Async function to fetch capital from the api
     * @param url of the api
     */
    async function getCapitalInfo(url: string) {
        const response = await axios.get(url+"capitales");
        let list = response.data;
        setCapitalList(list)
    }

    
    return (
        <>
            <div className="container">
                {capitalList.map((capital) => {
                    return <div>
                        <CapitalCard key={capital.id} id={capital.id}
                        name={capital.nombre} url={capital.foto} 
                        population={capital.datos[dataLength].poblacion} year={capital.datos[dataLength].anio} 
                        urlAPI={uri} />
                    </div>
                    
                })}
            </div>
        </>
    )
}

export default CapitalList