import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

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
  categories: number[];
}

/**
 * Type definition for the category
 */
type CategoryType = {
  id: number;
  name: string;
  description: string;
}

const UpdateMovie = (props: Props) => {

  /**
   * UseParams
   */
  const { movieId } = useParams();

  /**
   * UseStates
   */
  const [data, setData] = useState<MovieType>({} as MovieType);
  const [categories, setCategories] = useState<number[]>([]);
  const [allCategories, setAllCategories] = useState<CategoryType[]>([]);

  /**
   * Other properties
   */
  let navigate = useNavigate();
  const uri: string = `http://localhost:3000/movies/${movieId}`;
  const uriCategories: string = `http://localhost:3000/categories`;
  
  useEffect(() => {
    fetchCategories();
    fetchMovie();
    console.log(categories, data.categories);
  }, [movieId]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    let form = event.currentTarget;
    const id = movieId ? parseInt(movieId) : 0; 
    const title = form.title.value;
    const actor = form.actor.value;
    const director = form.director.value;
    const genre = form.genre.value;
    const year = parseInt(form.year.value);
    const description = form.description.value;
    const image = form.image.value;
    const trailer = form.trailer.value;

    const updatedMovie: MovieType = {
      id,
      title,
      actor,
      director,
      genre,
      year,
      description,
      image,
      trailer,
      categories
    };

    try {
      await axios.put(uri, updatedMovie);
    } catch (error) {
      console.error("Error updating the movie:", error);
    }

    navigate(`/movies`);
  }


  /**
   * Function to fetch the selected movie to edit from the api
   */
  const fetchMovie = async () => {
    try {
      const response = await axios.get(uri);
      setData(response.data);
      setCategories(data.categories || []);
    } catch (error) {
      console.error("Error fetching selected movie:", error);
    }

    console.log(data);
  } 

  /**
   * Function to fetch all the categories from the api
   */
  const fetchCategories = async () => {
    try {
      const response = await axios.get(uriCategories);
      setAllCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  /**
   * Function to handle the update of the categories from a movie
   * @param event 
   */
  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(event.target.selectedOptions, (option) => Number(option.value));
    setCategories(selectedValues);
    };

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
                  defaultValue={data.title} 
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
                  defaultValue={data.director}
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
                  defaultValue={data.actor}
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
                  defaultValue={data.year}
                  required
                />
              </div>

              <div className="col-12 col-md-6">
                <label>
                  <strong>Genres</strong>
                </label>
                <input
                  type="text"
                  name="genre"
                  placeholder="Enter the genres of the movie"
                  className="custom-input"
                  defaultValue={data.genre}
                  required
                />
              </div>

              <div className="col-12">
                <label>
                  <strong>Categories</strong>
                </label>
                  <select
                    name='categories'
                    multiple
                    className="custom-select"
                    onChange={handleCategoryChange}
                    size={allCategories.length} 
                  >
                    {allCategories.map((category) => (
                      <option key={category.id} value={category.id}  selected={categories.includes(category.id)}>
                        {category.name}
                      </option>
                    ))}
                  </select>
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
                  defaultValue={data.description}
                  
                  required
                />
              </div>

              <div className="col-12 col-md-6">
                <label>
                  <strong>Trailer</strong>
                </label>
                <input
                  type="text"
                  name="trailer"
                  placeholder="Youtube URL"
                  className="custom-input"
                  defaultValue={data.trailer}
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
                  defaultValue={data.image}
                />
              </div>

              <div className='col-12'>
                <button type="submit" className="custom-button w-100 ">
                    Update
                </button>
              </div>

          </div>
          
        </form>    
        </div>
      </div>
    </>
  )
}

export default UpdateMovie