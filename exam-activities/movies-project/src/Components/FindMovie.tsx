import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/FindMovie.css'
import '../Styles/MoviesList.css';

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

const FindMovie = (props: Props) => { 
  const [moviesList, setMovieList] = useState<MovieType[]>([]);
  const [typeSearch, setTypeSearch] = useState('title');

  const [search, setSearch] = useState('');
  const url = `http://localhost:3000/`;


  
  useEffect(() => {
    findMovieFromAPI();
  }, [search, typeSearch])
  

  const findMovieFromAPI = async () => {
    if (!typeSearch || !search.trim()) {
      const response = await axios.get(url+"movies");
      setMovieList(response.data);
      return;
    }
  
    try{
      const response = await axios.get(url+"movies");
      const filteredMovies = response.data.filter((movie: { [x: string]: string; }) =>
        movie[typeSearch].toLowerCase().includes(search.toLowerCase())
      );
      
      setMovieList(filteredMovies);
    } catch (error) {
      console.error(error);
      setMovieList([]);
    }
  }


  return (
      <>
        <div className='container mt-5'>
          <form onSubmit={findMovieFromAPI} className='custom-form'>
            <div className="row g-3 align-items-center ">
              <div className="col-md-8">
                <input
                  type="text"
                  name="nameSearch"
                  placeholder="Enter your search"
                  className="custom-input"
                  onChange={(e) => setSearch(e.target.value)}
                  defaultValue={search}
                />
              </div>

              <div className="col-md-4 d-flex align-items-center">
                <select
                  id="type_search"
                  name="type_search"
                  className="custom-input w-30"
                  onChange={(e) => setTypeSearch(e.target.value)}
                  value={typeSearch}
                >
                  <option value="title">Title</option>
                  <option value="actor">Actor</option>
                  <option value="director">Director</option>
                  <option value="genre">Year</option>
                  <option value="genre">Genre</option>
                </select>

                <button type="submit" className="custom-button w-50 ms-2 ">
                  <i className="bi bi-search"></i> 
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
                    <div className="custom-card">
                      <Link to={`/movies/${movie.id}`} 
                            className='link-offset-2 link-underline link-underline-opacity-0'>
                        <img
                          src={`${url}${movie.image}`} 
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
            )
          }
        </div>
      </div>
    </>
  )
}

export default FindMovie