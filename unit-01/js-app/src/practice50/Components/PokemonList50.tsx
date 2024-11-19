import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';



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


const PokemonList50 = () => {
    const [cardList, setCardList] = useState<IResult[]>([]);
    const uri: string = "https://pokeapi.co/api/v2/pokemon/"


    useEffect(() => {
        getPokemonCard(uri)
    }, []);

    /**
     * Async function to fetch pokemon card from the api
     * @param url of the api
     */
    async function getPokemonCard(url: string) {
        const response = await axios.get(url);
        let lista = response.data as IPokemonList;
        setCardList(lista.results)
    }


    
    return (
        <>
            <div className="container">
                {cardList.map((card, index) => {
                    return <div key={index}>
                                <Link to={`/pokemon/${index +1}`}>{card.name}</Link>
                            </div>
                })}
            </div>
        </>
    )
}

export default PokemonList50