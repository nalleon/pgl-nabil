import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/MovieDetails.css'

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
  const [movieList, setMovieList] = useState<MovieType[]>([]);
  const [typeSearch, setTypeSearch] = useState('title');

  const [search, setSearch] = useState('');



  
  useEffect(() => {
  
    
  }, [search, typeSearch])
  

  const findMovieFromAPI = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!typeSearch || !search.trim()) {
      console.error('Search type or query is missing.');
      setMovieList([]);
      return;
    }
  
    //const url = `http://localhost:3000/movies?${typeSearch}=${encodeURIComponent(search)}`;
    const url = `http://localhost:3000/movies`;
    
    //console.log(`Fetching movies from: ${url}`);
    
    try{
      const response = await axios.get(url);


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
          <form onSubmit={findMovieFromAPI} className='form-control'>
            <div className="row g-3 align-items-center">
              <div className="col-md-8">
                <input
                  type="text"
                  name="nameSearch"
                  placeholder="Enter your search"
                  className="form-control"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                />
              </div>

              <div className="col-md-4 d-flex align-items-center">
                <label htmlFor="type_search" className="form-label mb-0 me-2">
                  <b>Type:</b>
                </label>
                <select
                  id="type_search"
                  name="type_search"
                  className="form-control w-30"
                  onChange={(e) => setTypeSearch(e.target.value)}
                  value={typeSearch}
                >
                  <option value="title">Title</option>
                  <option value="actor">Actor</option>
                  <option value="director">Director</option>
                  <option value="genre">Year</option>
                  <option value="genre">Genre</option>
                </select>

                <button type="submit" className="btn w-50 ms-2" style={{ backgroundColor: 'rgb(106, 151, 219)' }}>
                  Search
                </button>
                </div>
            </div>
          </form>

          <div className="mt-5">
          {
            movieList.length > 0 && (
              <div className="row">
                {movieList.map((movie, index) => (
                  <Link to={`/movies/${movie.id}`}>
                    <div key={index} className="col-md-4 mb-4">
                      <div className="card">
                        <img
                          src={`http://localhost:3000/${movie.image}`}
                          className="img-animation"
                          alt={movie.title}
                        />
                        <div className="card-body">
                          <h5 className="card-title text-center text-primary">{movie.title}</h5>
                        </div>
                      </div>
                    </div>
                    </Link>
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