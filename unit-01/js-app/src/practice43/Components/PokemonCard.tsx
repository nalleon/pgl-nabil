import React, { useEffect, useState } from 'react'
import axios from 'axios';


type Props = {
    url: string;
}


interface IResult {
    name: string;
    sprite: string;
    height: number;
    weight: number;
}

function PokemonCard(props : Props) {
    const [cardData, setcardData] = useState<IResult>({} as IResult);
    const {url} = props;

    useEffect(() => {
        getCardInfo(url);
    }, [])


    /**
     * Async function to fetch pokemon card from the api
     * @param link of the api
     */
    async function getCardInfo(link : string){
        const response = await axios.get(link);
        let info = {} as IResult;
        info.name = response.data.name;
        info.sprite = response.data.sprites.front_shiny;
        info.height = response.data.height /10;
        info.weight = response.data.weight /10;
        console.log(info.sprite);
        setcardData(info);
    }

    
    return (
        <>
            <div className='pokemonCard'>
                <h3>{cardData.name}</h3>
                <img src={cardData.sprite} alt={cardData.name}/>
                <p>Height: {cardData.height} m</p>
                <p>Weight: {cardData.weight} kg</p>
            </div>
        </>
    )
}

export default PokemonCard

