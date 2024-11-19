import React from 'react'
import { useAppContext } from './AppContextProvider.tsx';

type Props = {}

const PokemonFavourite = (props: Props) => {
    const { favourite } = useAppContext();

    if (!favourite) {
        return <div className="pokemonFavorite">
                    <p> You have not selected a favourite pokemon</p>
                </div>;
    }

    return (
        <div className="pokemonFavorite">
            <h2>Favourite</h2>
            <h3>{favourite.name}</h3>
            <img src={favourite.sprite} alt={favourite.name} />
            <p>Height: {favourite.height} m</p>
            <p>Weight: {favourite.weight} kg</p>
        </div>
    )
}

export default PokemonFavourite