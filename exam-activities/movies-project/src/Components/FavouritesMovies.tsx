import React, { useContext } from 'react'
import { FavouriteMovieContext } from './Context/FavouriteMoviesContextProvider';

type Props = {}

const FavouritesMovies = (props: Props) => {
    const context = useContext(FavouriteMovieContext);
    
    return (
        <>
        <div>
            {context.favourites.map((movie) =>
                <div key={movie.id}>{movie.title}</div>
                )}
            </div>;
        </>
    )
}

export default FavouritesMovies