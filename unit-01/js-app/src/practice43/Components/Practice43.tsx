import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard.tsx';
import axios from 'axios';



interface IPokemonList {
    count: number;
    next: string;
    previous: string;
    results: IResult[];
}

interface IResult {
    name: string;
    url: string;
}  

const Practice43 = () => {
    const [cardList, setCardList] = useState<IResult[]>([]);
    const uri: string = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"

    useEffect(() => {
        getPokemonCard(uri)
    }, []);

    /**
     * Async function to fetch pokemon card from the api
     * @param url of the api
     */
    async function getPokemonCard(url: string) {
        const response = await axios.get(url);
        let list = response.data as IPokemonList;
        setCardList(list.results)
    }

    
    return (
        <>
            <div className="container">
                {cardList.map((card) => {
                    return <PokemonCard url={card.url} />
                })}
            </div>
        </>
    )
}

export default Practice43