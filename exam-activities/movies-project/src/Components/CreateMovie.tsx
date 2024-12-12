import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ImageComponent from './ImageComponent';
import { AppThemeContext } from './Context/AppThemeContextProvider';
import BackButton from './BackButton';

/**
 * @author Nabil Leon Alvarez <@nalleon>
 */
type Props = {}

/**
 * Type of the movies json object
 */
type MovieType = {
  id: string;
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
};

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
  const [image, setImage] = useState('');
  const [categories, setCategories] = useState<number[]>([]);
  const [allCategories, setAllCategories] = useState<CategoryType[]>([]);

  /**
   * Context for theme
   */
  const context = useContext(AppThemeContext);

  /**
   * Other properties
   */

  let navigate = useNavigate();
  const uri: string = "http://localhost:3000/movies"


  /**
   * UseEffect for fetching the categories
   */
  useEffect(() => {
    fetchCategories();
  }, [])


  /**
   * Function to fetch all categories from the API
   */
  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:3000/categories'); 
      setAllCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Function to hanlde the creation de una nueva pelicula
   * @param event submit button of the form
   */
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    let auxMovies: MovieType[] = [];

    try {
      const response = await axios.get(uri);
      auxMovies = response.data;
    } catch (error) {
      console.error("Error fetching all movies:", error);
    }

    const nextId = getNextId(auxMovies);

    const newMovie: MovieType = {
      id: ""+nextId,
      title,
      actor,
      director,
      genre,
      year,
      description,
      image: image ? image : 'default.jpg',
      trailer,
      categories
    };

    try {
      await axios.post(uri, newMovie);
    } catch (error) {
      console.error("Error creating the movie:", error);
    }

    navigate('/movies/' + nextId);
  }

  /**
   * Function to get the next Id for the new Movie
   * @param moviesList to retrieve the last id at the moment
   * @returns next id 
   */
  const getNextId = (moviesList : MovieType[]) => {
    const lastMovie = moviesList[moviesList.length - 1];
    const id = parseInt(lastMovie.id.toString()) + 1;
    return id;
  }

  /**
   * Function to handle the categories selected changes for a movie
   * @param event 
   */
  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = getSelectedValues(event.target.selectedOptions);
    setCategories(selectedValues);
  };

  /**
   * Function to get the selected values
   * @param options of the select input
   * @returns an array with the values of the options
   */
  const getSelectedValues = (options: HTMLCollectionOf<HTMLOptionElement>): number[] => {
    return Array.from(options, option => Number(option.value));
  };

  return (
    <>
      <div className="container py-5" style={{minHeight:'100vh'}}>
        <div className={`card card-custom${context.theme === 'dark' ? '' : '-light'}`}>
          <form onSubmit={handleSubmit}>
            <div className="row g-3 align-items-center ">
                <div className="col-12">
                  <label className={`${context.theme === 'dark' ? '' : 'label-light'}`}>
                    <strong>Title</strong>
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Enter the title"
                    className={`custom-input${context.theme === 'dark' ? '' : '-light'}`}
                    onChange={(e) => setTitle(e.target.value)}
                    defaultValue={title} 
                    required
                  />
                  
                <div className="col-12 mt-3">
                    <ImageComponent value={image}
                                    onChange={(newUrl) => setImage(newUrl)}/>
                </div>
                </div>
                <div className="col-12 col-md-6">
                  <label className={`${context.theme === 'dark' ? '' : 'label-light'}`}>
                    <strong>Director</strong>
                  </label>
                  <input
                    type="text"
                    name="director"
                    placeholder="Enter the director's name"
                    className={`custom-input${context.theme === 'dark' ? '' : '-light'}`}
                    onChange={(e) => setDirector(e.target.value)}
                    defaultValue={director}
                    required
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className={`${context.theme === 'dark' ? '' : 'label-light'}`}>
                    <strong>Main actors/actress</strong>
                  </label>
                  <input
                    type="text"
                    name="actor"
                    placeholder="Enter the actors/actresses' names"
                    className={`custom-input${context.theme === 'dark' ? '' : '-light'}`}
                    onChange={(e) => setActor(e.target.value)}
                    defaultValue={actor}
                    required
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className={`mt-2 ${context.theme === 'dark' ? '' : 'label-light'}`}>
                    <strong>Year of release</strong>
                  </label>
                  <input
                    type="number"
                    name="year"
                    placeholder="Enter the year of realease"
                    className={`custom-input${context.theme === 'dark' ? '' : '-light'}`}
                    onChange={(e) => setYear(parseInt(e.target.value))}
                    defaultValue={year}
                    required
                  />
                  <label className={`mt-2 ${context.theme === 'dark' ? '' : 'label-light'}`}>
                    <strong>Genres</strong>
                  </label>
                  <input
                    type="text"
                    name="year"
                    placeholder="Enter the genres of the movie"
                    className={`custom-input${context.theme === 'dark' ? '' : '-light'}`}
                    onChange={(e) => setGenre(e.target.value)}
                    defaultValue={genre}
                    required
                  />
                  <label className={`mt-2 ${context.theme === 'dark' ? '' : 'label-light'}`}>
                    <strong>Trailer</strong>
                  </label>
                  <input
                    type="text"
                    name="year"
                    placeholder="Youtube URL"
                    className={`custom-input${context.theme === 'dark' ? '' : '-light'}`}
                    onChange={(e) => setTrailer(e.target.value)}
                    defaultValue={trailer}
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className={`mt-2 ${context.theme === 'dark' ? '' : 'label-light'}`}>
                    <strong>Categories</strong>
                  </label>
                    <select
                      multiple
                      className={`custom-select${context.theme === 'dark' ? '' : '-light'}`}
                      onChange={handleCategoryChange}
                      size={allCategories.length} 
                    >
                      {allCategories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                </div>

                <div className="col-12">
                  <label className={`${context.theme === 'dark' ? '' : 'label-light'}`}>
                    <strong>Description</strong>
                  </label>
                  <textarea

                    name="description"
                    placeholder="Enter a brief description of the movie"
                    rows={4} cols={50}
                    className={`custom-input${context.theme === 'dark' ? '' : '-light'}`}
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}

                    required
                  />
                </div>

                <div className='col-12'>
                  <button type="submit" className={`custom-button${context.theme === 'dark' ? '' : '-create-light'} w-100`}>
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