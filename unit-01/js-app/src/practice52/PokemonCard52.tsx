import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useAppContext52 } from './AppContextProvider52.tsx';




interface IResult {
    name: string;
    sprite: string;
    height: number;
    weight: number;
}


function PokemonCard50() {
    const [cardData, setcardData] = useState<IResult>({} as IResult);
    const { pokemonId } = useParams();
    const  url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    const context = useAppContext52();
    


    useEffect(() => {
        getCardInfo(url);
    }, [pokemonId])

    /**
     * Async function to fetch pokemon card from the api
     * @param link of the api
     */
    async function getCardInfo(link : string){
        const response = await axios.get(link);
        let info = {} as IResult;
        info.name = response.data.name;
        info.sprite = response.data.sprites.front_shiny;
        info.height = response.data.height / 10;
        info.weight = response.data.weight /10;
        setcardData(info);
    }
    return (
        <>
            <div className='pokemonCard'>
                <h3>{cardData.name}</h3>
                <img src={cardData.sprite} alt={cardData.name}/>
                <p>Height: {cardData.height} m</p>
                <p>Weight: {cardData.weight} kg</p>
                <button onClick={() => context.setFavourite(cardData)}>Set Favorite</button>
            </div>
        </>
    )
}

export default PokemonCard50

