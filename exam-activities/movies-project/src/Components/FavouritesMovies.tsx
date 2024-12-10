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

    //const favourites = context.user && context.user.favourites ? context.user.favourites : [];


    return (
        <>
            <div className="container">
                    {
                        
                        context.favourites.length > 0 ? (
                        <div className="mt-5">
                            <div className='justify-content-center align-items-center'>
                                <h2 className='text-center text-uppercase fw-bold title'>Favourites Movies</h2>
                                <h2 className='text-center mb-5 text-uppercase fw-bold title'><i className="bi bi-award-fill text-center"></i></h2>   
                            </div>
                            <div className="row g-3 flex-wrap">
                                {context.favourites.map((movie, index) => (
                                <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-2 mb-3">
                                    <div className="fav-custom-card">
                                    <Link to={`/movies/${movie.id}`} 
                                            className='link-offset-2 link-underline link-underline-opacity-0'>
                                        {movie.image ? (
                                            movie.image.startsWith("http://") || movie.image.startsWith("https://") ? (
                                            <img
                                                src={movie.image}
                                                alt={movie.title}
                                                className="img-fluid"
                                            />
                                            ) : (
                                            <img
                                                src={url + movie.image}
                                                alt={movie.title}
                                                className="img-fluid"
                                            />
                                            )
                                        ) : (
                                            <img
                                            src={url + 'default,jpg'}  
                                            alt="default"
                                            className="img-fluid"
                                            />
                                        )}
                                        <div className="fav-custom-title">
                                            {movie.title}
                                        </div>
                                    </Link>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>

                        ) : (
                            <h5 className='text-center text-uppercase fw-bold mb-5'>No favourite movies yet.</h5>
                        )
                    }
            </div>
        </>
    )
}

export default FavouritesMovies