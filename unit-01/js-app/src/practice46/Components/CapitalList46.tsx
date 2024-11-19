import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useAppContext } from '../../practice51/AppContextProvider51.tsx';

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
const CapitalList46 = () => {
    const { username } = useAppContext(); 

    const [capitalList, setCapitalList] = useState<IRootObject[]>([]);
    const uri: string = "http://localhost:3000/"
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
            <h2>List of capitals</h2>
                {username && <span>Hello {username}!</span>}
            <br />
            <div className="container">
                {capitalList.map((card, index) => {
                    return <div key={index}>
                                <Link to={`/capitals/capital/${card.id}`}>{card.nombre}</Link>
                            </div>
                })}
            </div>
        </>
    )
}

export default CapitalList46