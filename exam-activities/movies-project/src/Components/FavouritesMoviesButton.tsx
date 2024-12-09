import React, { useContext } from 'react'
import { FavouriteMovieContext } from './Context/FavouriteMoviesContextProvider';
import { Link } from 'react-router-dom';
import '../Styles/FavouritesMovies.css'

/**
 * @author Nabil Leon Alvarez <@nalleon>
 */

type Props = {}

const FavouritesMoviesButton = (props: Props) => {
    const context = useContext(FavouriteMovieContext);

    const showMovies = () => {
        return context.favourites.map((movie) =>
            <div key={movie.id}>{movie.title}</div>
        );
    };

    

    return (
        <>
            <Link to='/favourites' className='custom-button'>  
                <i className="bi bi-star-fill"></i>
            </Link>
          
        </>
    )
}

export default FavouritesMoviesButton