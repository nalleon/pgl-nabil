import React from 'react'
import { useAppContext52 } from './AppContextProvider52.tsx';

type Props = {}

const PokemonFavourite52 = (props: Props) => {
    const context = useAppContext52();

    if (!context.favourite) {
        return <div className="pokemonFavorite">
                    <p> You have not selected a favourite pokemon</p>
                </div>;
    }

    return (
        <div className="pokemonFavorite">
            <h2>Favourite</h2>
            <h3>{context.favourite.name}</h3>
            <img src={context.favourite.sprite} alt={context.favourite.name} />
            <p>Height: {context.favourite.height} m</p>
            <p>Weight: {context.favourite.weight} kg</p>
        </div>
    )
}

export default PokemonFavourite52