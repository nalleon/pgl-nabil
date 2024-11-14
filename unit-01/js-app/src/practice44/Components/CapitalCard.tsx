import React from 'react'

type Props = {
    name: string;
    url: string;
    population : number;
}

const CapitalCard = (props: Props) => {
    const { name, url, population} = props;
    return (
        <>
            <div className='capitalCard'>
                <h2>{name}</h2>
                <p>{population}</p>
                <img src={url} alt={name} />
            </div>
        </>
    )
}

export default CapitalCard