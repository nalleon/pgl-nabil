import React, { useEffect, useState } from 'react'
import axios from 'axios';


type Props = {
    name: string;
    url: string;
}


interface IResult {
    sprite: string;
    height: number;
    weight: number;
}

function PokemonCard(props : Props) {
    const [cardData, setcardData] = useState<IResult>({} as IResult);
    const {url, name} = props;

    useEffect(() => {
        async function getCardInfo(link : string){
            const response = await axios.get(link);
            let info = {} as IResult;
            info.sprite = response.data.sprites.front_shiny;
            info.height = response.data.height;
            info.weight = response.data.weight;
            
            setcardData(info);
        }

        getCardInfo(url);
    }, [])
    
    return (
        <>
            <div className='pokemonCard'>
                <h3>{name}</h3>
                <img src={url} alt={name}/>
                <p>Height: {cardData.height} m</p>
                <p>Weight: {cardData.weight} kg</p>
            </div>
        </>
    )
}

export default PokemonCard

