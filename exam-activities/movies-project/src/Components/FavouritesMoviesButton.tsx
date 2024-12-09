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

    return (
        <>
            <Link to='/favourites' className='custom-button'>  
                <span>Favourites<i className="bi bi-star-fill"></i></span>
            </Link>
        </>
    )
}

export default FavouritesMoviesButton