import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { Link, useNavigate, useParams } from 'react-router-dom'
import '../Styles/MovieDetails.css';
import DeleteMovie from './DeleteMovie';
import { FavouriteMovieContext } from './Context/FavouriteMoviesContextProvider';

/**
 * @author Nabil Leon Alvarez <@nalleon>
 */
type Props = {

}

type MovieType = {
  id: number;
  title: string;
  actor: string;
  director: string;
  genre: string;
  year: number;
  description: string;
  image: string;
  trailer: string;
}

const MovieDetails = (props: Props) => {
  const { movieId } = useParams();
  const [data, setData] = useState<MovieType>({} as MovieType);
  const uri: string = "http://localhost:3000/"
  const [showConfirmation, setShowConfirmation] = useState(false);

  /**
   * Context and useState for favourites
   */
  const context = useContext(FavouriteMovieContext);
  const [isFavourite, setIsFavourite] = useState<boolean>(() => 
    {
      if (movieId != null) {
        const isFav = context.favourites.some((favourite) => favourite.id == parseInt(movieId));
        return isFav ? true : false;
      }
      return false; 
    }
  );

  /**
   * UseEfect 
   */

  useEffect(() => {
    fetchMovie();
  }, [movieId, context.favourites]);



  /**
   * Function to fetch the movie from the api
   */
  const fetchMovie = async () => {
    try {
      const response = await axios.get(`${uri}movies/${movieId}`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching the movie:", error);
    }
  };

  /**
   * Function to handle the favourite add/remove 
   */
  const handleAddFavourite = () => {
    const added = context.addFavourite(data);
    setIsFavourite(true);

    if (!added){
      context.removeFavourite(data.id);
      setIsFavourite(false);
      return;
    }

  }

  return (
    <>
      <div className="container py-5">
        <div className="row align-items-center custom-bg">
          <div className="col-sm-12 col-md-6 ">
            <img
              src={uri + data.image}
              alt={data.title}
              className="img-fluid"
            />
          </div>
          <div className="col-sm-12 col-md-6">
            <div className='card card-custom'>
              <h3 className="display-5 text-uppercase mb-4 fw-bold">{data.title}</h3>
              <ul className="list-unstyled mb-4">
                <li className="mb-3">
                  <strong>Actor:</strong> {data.actor}
                </li>
                <li className="mb-3">
                  <strong>Director:</strong> {data.director}
                </li>
                <li className="mb-3">
                  <strong>Genre:</strong> {data.genre}
                </li>
                <li className="mb-3">
                  <strong>Release date:</strong> {data.year}
                </li>
              </ul>

              <div className="description mb-4">
                <p className="text-justify">{data.description}</p>
              </div>

              <div className="trailer">
                <h5 className="mb-3">Watch Trailer</h5>
                <ReactPlayer
                  url={data.trailer}
                  controls
                  width="100%"
                  height="300px"
                  className="rounded shadow-lg"
                />
              </div>
              <div className="row mt-3">
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <button className={`custom-button${isFavourite === true ? '-fav' : ''}`} onClick={handleAddFavourite}>  
                    <i className={`bi bi-star${isFavourite === true ? '-fill' : ''}`}></i>
                  </button> 
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 ms-5 me-5">
            <div className="col-12 col-md-6">
              <Link to={`/movies/modify/${data.id}`} className="btn btn-primary w-75">
                Edit
              </Link>               
            </div>
            <div className="col-12 col-md-6">
              <button className="btn btn-danger w-75" onClick={() => setShowConfirmation(true)}>
                  Delete
              </button>
            </div>
          </div>
        </div>
        <div className='align-items-center'>
            {showConfirmation && (
              <DeleteMovie movieId={movieId} onCancel={() => setShowConfirmation(false)}/>
          )}
        </div>
    
      </div>
    </>
  )
}

export default MovieDetails