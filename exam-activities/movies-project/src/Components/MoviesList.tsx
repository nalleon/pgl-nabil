import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieDetails from './MovieDetails';
import { Link } from 'react-router-dom';

/**
 * @author Nabil Leon Alvarez <@nalleon>
 */
type Props = {}


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

const MoviesList = (props: Props) => {
  const [moviesList, setMoviesList] = useState<MovieType[]>([]);
  const uri: string = "http://localhost:3000/"

  useEffect(() => {
    getApiInfo(uri)
  }, []);

  /**
  * Async function to fetch movies from the api
  * @param url of the api
  */
  async function getApiInfo(url: string) {
    const response = await axios.get(url+"movies");
    setMoviesList(response.data);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          {moviesList.map((movie, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <Link to={`/movies/${movie.id}`} 
                      className='link-offset-2 link-underline link-underline-opacity-0'>
                  <img
                    src={`${uri}${movie.image}`} 
                    alt={movie.title} 
                    className="card-img-top" 
                    width={500} 
                    height={750} 
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">{movie.title}</h5>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default MoviesList
