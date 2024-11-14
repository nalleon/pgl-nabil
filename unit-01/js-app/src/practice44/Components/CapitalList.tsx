import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CapitalCard from './CapitalCard.tsx';

type Props = {}



/**
 * interface ICapitalList {
    COD: string;
    Nombre: string;
    T3_Unidad: string;
    T3_Escala: string;
    MetaData: ICapitalMetaData[];
    Data: ICapitalData[];
}

interface ICapitalData {
    Fecha: string;
    T3_TipoDato: string;
    T3_Periodo: string;
    Anyo: number;
    Valor: number;
}

interface ICapitalMetaData {
    Id: number;
    T3_Variable: string;
    Nombre: string;
    Codigo: string;
}
 */


interface IResult {
  id: string;
  name: string;
  population: number;
  url: string;
}
/**
 * json-server --watch capitals.json --port 3001
 */
const CapitalList = () => {
    const [capitalList, setCapitalList] = useState<IResult[]>([]);
    const uri: string = "http://localhost:3001/capitals"
    
    useEffect(() => {
        getCapitalInfo(uri)
    }, []);

    /**
     * Async function to fetch pokemon card from the api
     * @param url of the api
     */
    async function getCapitalInfo(url: string) {
        const response = await axios.get(url);
        let lista = response.data;
        //console.log(lista);
        setCapitalList(lista)
    }

    
    return (
        <>
            <div className="container">
                {capitalList.map((capital) => {
                    return <CapitalCard key={capital.id} name={capital.name} url={capital.url} population={capital.population} />
                })}
            </div>
        </>
    )
}

export default CapitalList