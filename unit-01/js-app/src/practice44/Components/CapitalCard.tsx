import React from 'react'

type Props = {
    id : string;
    name: string;
    url: string;
    population: number;
    year : number;
    urlAPI : string;
}

const CapitalCard = (props: Props) => {
    const { id, name, url, population, year, urlAPI} = props;

    return (
        <>
            <div className='capitalCard'>
                <h2>{name}</h2>
                <p>{population} in {year}</p>
                <img src={urlAPI + "poblacion/img/"+ url} alt={name} />
            </div>
        </>
    )
}

export default CapitalCard