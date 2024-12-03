import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/MoviesList.css';
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
        <div className="row flex-wrap">
          {moviesList.map((movie, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-2 mb-3">
              <div className="custom-card">
                <Link to={`/movies/${movie.id}`} 
                      className='link-offset-2 link-underline link-underline-opacity-0'>
                  <img
                    src={`${uri}${movie.image}`} 
                    alt={movie.title} 
                    className="custom-img" 
                  />
                  <div className="custom-title">
                      {movie.title}
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
