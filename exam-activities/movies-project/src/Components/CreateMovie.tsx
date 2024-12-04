import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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

const CreateMovie = (props: Props) => {
  /**
   * UseStates
   */  
  const [title, setTitle] = useState('');
  const [actor, setActor] = useState('');
  const [director, setDirector] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState(0);
  const [description, setDescription] = useState('');
  const [trailer, setTrailer] = useState('https://youtu.be/_htiXfLqXxU?si=MZp0o1GEhpL5_hkj');
  const [image, setImage] = useState('default.jpg');


  /**
   * Other properties
   */

  let navigate = useNavigate();
  const uri: string = "http://localhost:3000/movies"



  const handleSubmit = async (event: any) => {
    event.preventDefault();

    let auxMovies: MovieType[] = [];

    try {
      const response = await axios.get(uri);
      auxMovies = response.data;
    } catch (error) {
      console.error("Error fetching all movies:", error);
    }


    const newMovie: MovieType = {
      id: auxMovies.length + 1,
      title,
      actor,
      director,
      genre,
      year,
      description,
      image,
      trailer
    };

    try {
      await axios.post(uri, newMovie);
    } catch (error) {
      console.error("Error creating the movie:", error);
    }

    navigate('/movies');
  }


  return (
    <>
      <div className="container py-5">
        <div className='card card-custom'>
        <form onSubmit={handleSubmit}>
        <div className="row g-3 align-items-center ">
              <div className="col-12">
                <label>
                  <strong>Title</strong>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter the title"
                  className="custom-input"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title} 
                  required
                />
              </div>
              <div className="col-12 col-md-6">
                <label>
                  <strong>Director</strong>
                </label>
                <input
                  type="text"
                  name="director"
                  placeholder="Enter the director's name"
                  className="custom-input"
                  onChange={(e) => setDirector(e.target.value)}
                  value={director}
                  required
                />
              </div>

              <div className="col-12 col-md-6">
                <label>
                  <strong>Main actors/actress</strong>
                </label>
                <input
                  type="text"
                  name="actor"
                  placeholder="Enter the director's name"
                  className="custom-input"
                  onChange={(e) => setActor(e.target.value)}
                  value={actor}
                  required
                />
              </div>

              <div className="col-12 col-md-6">
                <label>
                  <strong>Year of release</strong>
                </label>
                <input
                  type="number"
                  name="year"
                  placeholder="Enter the year of realease"
                  className="custom-input"
                  onChange={(e) => setYear(parseInt(e.target.value))}
                  value={year}
                  required
                />
              </div>

              <div className="col-12 col-md-6">
                <label>
                  <strong>Genres</strong>
                </label>
                <input
                  type="text"
                  name="year"
                  placeholder="Enter the genres of the movie"
                  className="custom-input"
                  onChange={(e) => setGenre(e.target.value)}
                  value={genre}
                  required
                />
              </div>

              <div className="col-12">
                <label>
                  <strong>Description</strong>
                </label>
                <textarea
  
                  name="description"
                  placeholder="Enter a brief description of the movie"
                  rows={4} cols={50}
                  className="custom-input"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  
                  required
                />
              </div>

              <div className="col-12 col-md-6">
                <label>
                  <strong>Trailer</strong>
                </label>
                <input
                  type="text"
                  name="year"
                  placeholder="Youtube URL"
                  className="custom-input"
                  onChange={(e) => setTrailer(e.target.value)}
                  value={trailer}
                />
              </div>

              <div className="col-12 col-md-6">
                <label>
                  <strong>Movie thumbail</strong>
                </label>
                <input
                  type="text"
                  name="image"
                  placeholder="Image URL"
                  className="custom-input"
                  onChange={(e) => setImage(e.target.value)}
                  value={image}
                />
              </div>

              <div className='col-12'>
                <button type="submit" className="custom-button w-100 ">
                    Create
                </button>
              </div>

          </div>
          
        </form>    
        </div>
      </div>
    </>
  )
}

export default CreateMovie