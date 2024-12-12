import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/FindMovie.css'
import '../Styles/MoviesList.css';
import { AppThemeContext } from './Context/AppThemeContextProvider';
/**
 * @author Nabil Leon Alvarez <@nalleon>
 */

type Props = {}

/**
 * Type definition for the movie
 */
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

const FindMovie = (props: Props) => { 
  /**
   * UseStates for search
   */
  const [moviesList, setMovieList] = useState<MovieType[]>([]);
  const [typeSearch, setTypeSearch] = useState('title');
  const [search, setSearch] = useState('');

  /**
   * UseState for pagination
   */
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const maxMoviesPerPage = 10;

  /**
   * Other properties
   */
  const url = `http://localhost:3000/`;

  /**
   * Context for theme
   */
  const context = useContext(AppThemeContext);

  /**
   * UseEffect for fetching the movies
   */
  useEffect(() => {
    findMovieFromAPI();
  }, [search, typeSearch])
  

  /**
   * Fucntion to fetch a list of movies from the API following an specified filter criteria
   * @returns if there's no filter applied
   */
  const findMovieFromAPI = async () => {
    try {
      const response = await axios.get(`${url}movies`);
      const movies = response.data;

      if (!typeSearch || !search.trim()) {
          setMovieList(movies);
          return;
      }

      let auxFilteredMovies : MovieType[] = [];

      for (const movie of movies) {
        if (typeSearch === 'year') {
          if (String(movie[typeSearch]).includes(search)) {
            auxFilteredMovies.push(movie);
          }
        } else {
            if (movie[typeSearch]?.toLowerCase().includes(search.toLowerCase())) {
              auxFilteredMovies.push(movie);
            }
        }
      }


      setMovieList(auxFilteredMovies);

    } catch (error) {
      console.error(error);
      setMovieList([]);
    }
  }


  return (
      <>
        <div className='container mt-3' style={{minHeight:'100vh'}}>
          <form onSubmit={findMovieFromAPI} className={`custom-form${context.theme === 'dark' ? '' : '-light'}`}>
            <div className="row g-3 align-items-center ">
              <div className="col-md-8">
                <input
                  type="text"
                  name="nameSearch"
                  placeholder="Enter your search"
                  className={`custom-input${context.theme === 'dark' ? '' : '-light'}`}
                  onChange={(e) => setSearch(e.target.value)}
                  defaultValue={search}
                />
              </div>

              <div className="col-md-4 d-flex align-items-center">
                <select
                  id="type_search"
                  name="type_search"
                  className={`custom-input${context.theme === 'dark' ? '' : '-light'} w-30`}
                  onChange={(e) => setTypeSearch(e.target.value)}
                  value={typeSearch}
                >
                  <option value="title">Title</option>
                  <option value="actor">Actor</option>
                  <option value="director">Director</option>
                  <option value="year">Year</option>
                  <option value="genre">Genre</option>
                </select>

                <button type="submit" className={`custom-button${context.theme === 'dark' ? '' : '-light'} w-50 ms-2 `}>
                  <i className={`bi bi-search
                      ${context.theme === 'dark' ? 'icon-dark-theme-search' : 'icon-light-theme-search'}
                    `}></i> 
                </button>
                </div>
            </div>
          </form>

          <div className="mt-5">
          {
            moviesList.length > 0 && (
              <div className="row flex-wrap">
                {moviesList.map((movie, index) => (
                  <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-2 mb-3">
                    <div className={`custom-card${context.theme === 'dark' ? '' : '-light'}`}>
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
                        <div className="custom-title">
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

export default FindMovie