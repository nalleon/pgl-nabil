import React, { useContext } from 'react'
import { FavouriteMovieContext } from './Context/FavouriteMoviesContextProvider';
import { Link } from 'react-router-dom';
import '../Styles/Favourites.css';

/**
 * @author Nabil Leon Alvarez <@nalleon>
 */

type Props = {}

const FavouritesMovies = (props: Props) => {
    const context = useContext(FavouriteMovieContext);
    const url = `http://localhost:3000/`;    

    return (
        <>
            <div className="container">
                <div className="mt-5">
                    {
                        context.favourites.length > 0 && (
                        <div className="row flex-wrap">
                            {context.favourites.map((movie, index) => (
                            <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-2 mb-3">
                                <div className="fav-custom-card">
                                <Link to={`/movies/${movie.id}`} 
                                        className='link-offset-2 link-underline link-underline-opacity-0'>
                                    <img
                                    src={`${url}${movie.image}`} 
                                    alt={movie.title} 
                                    className="fav-custom-img" 
                                    />
                                    <div className="fav-custom-title">
                                        {movie.title}
                                    </div>
                                </Link>
                                </div>
                            </div>
                            ))}
                        </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default FavouritesMovies