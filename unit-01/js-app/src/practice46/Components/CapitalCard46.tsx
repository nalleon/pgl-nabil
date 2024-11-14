import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


interface IResult {
    id : string;
    name: string;
    url: string;
    population: number;
    year : number;
    urlAPI : string;
}

const CapitalCard46 = () => {
    const [cardData, setcardData] = useState<IResult>({} as IResult);
    const { capitalId } = useParams();
    const  url = `http://localhost:3000/capitales/${capitalId}`;
    const auxImgUri = "http://localhost:3001/poblacion/img/";

    useEffect(() => {
        async function getCardInfo(link : string){
            const response = await axios.get(link);
            let info = {} as IResult;
            info.id = response.data.id;
            info.name = response.data.nombre;
            info.url = response.data.foto;
            info.population = response.data.datos[0].poblacion;
            info.year = response.data.datos[0].anio;
            info.urlAPI = auxImgUri;
            setcardData(info);
        }

        getCardInfo(url);
    }, [capitalId])

    console.log(cardData.url);
    
    return (
        <>
            <div className='capitalCard'>
                <h2>{cardData.name}</h2>
                <p>{cardData.population} in {cardData.year}</p>
                <img src={cardData.urlAPI + cardData.url} alt={cardData.name} />
            </div>
        </>
    )
}

export default CapitalCard46