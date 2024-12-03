import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {}

type MovieType = {
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
  const [movie, setMovie] = useState<MovieType>({} as MovieType);
  const [typeSearch, setTypeSearch] = useState('title');

  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('');
  const [actor, setActor] = useState('');
  const [director, setDirector] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState(0);
  const [description, setDescription] = useState('');

  
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
          {movieList.length > 0 ? (
            <div className="row">
              {movieList.map((movie, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src={`http://localhost:3000/${movie.image}`}
                      className="card-img-top"
                      alt={movie.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{movie.title}</h5>
                      <p className="card-text"><b>Actor:</b> {movie.actor}</p>
                      <p className="card-text"><b>Director:</b> {movie.director}</p>
                      <p className="card-text"><b>Genre:</b> {movie.genre}</p>
                      <p className="card-text"><b>Year:</b> {movie.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No movies found. Try a different search.</p>
          )}
        </div>
      </div>
    </>
  )
}

export default FindMovie