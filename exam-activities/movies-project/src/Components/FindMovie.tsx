import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {}

type MovieType = {
  title: string;
  actor: string;
  director: string;
  genre: string;
  year: number;
}
const FindMovie = (props: Props) => { 
  const [movieList, setMovieList] = useState<MovieType[]>([]);
  const [movie, setMovie] = useState<MovieType>({} as MovieType);

  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('');
  const [actor, setActor] = useState('');
  const [director, setDirector] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState(0);
  const [description, setDescription] = useState('');

  


  const findMovieFromAPI = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form : HTMLFormElement = e.currentTarget;
    const typeSearch = form.type_search.value;
    const nameSearch = form.nameSearch.value;

    let url : string = "http://localhost:3000/movies/"+typeSearch+"/"+nameSearch;

    
    
  }

  const findMovies = async (url : string) => {
    try{
      const response = await axios.get(url)
      setMovie(response.data);
      setTitle(movie?.title);
  
    } catch(error){
      console.log(error);
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
                >
                  <option value="name" selected>Name</option>
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

        </div>
      </>
  )
}

export default FindMovie