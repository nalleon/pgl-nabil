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
interface MovieType {
  titulo: string;
  year: string;
  direccion: DireccionActores[];
  actores: DireccionActores[];
  categorias: Categoria[];
  descripcion: string;
  caratula: string;
  trailer: string;
}

interface Categoria {
  id : number,
  nombre: string;
}

interface DireccionActores {
  id : number,
  nombre: string;
  apellidos: string;
}


/**
 * Type definition for the category
 */
type CategoryType = {
  id: number;
  name: string;
};

const CreateMovie = (props: Props) => {
  /**
   * UseStates
   */  
  const [title, setTitle] = useState<string>('');

  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');
  const [trailer, setTrailer] = useState('');
  const [image, setImage] = useState('');

  const [categories, setCategories] = useState<number[]>([]);
  const [actorsList, setActorList] = useState<number[]>([])
  const [directorsList, setDirectorsList] = useState<number[]>([]);

  const [allCategories, setAllCategories] = useState<Categoria[]>([]);
  const [allActors, setallActors] = useState<DireccionActores[]>([]);
  const [allDirectors, setallDirectors] =useState<DireccionActores[]>([]);

  const [selectedCategories, setselectedCategories] = useState<Categoria[]>([]);
  const [selectedActors, setSelectedActors] = useState<DireccionActores[]>([]);
  const [selectedDirectors, setSelectedDirectors] = useState<DireccionActores[]>([]);


  /**
   * Context for theme
   */
  const context = useContext(AppThemeContext);

  /**
   * Other properties
   */

  let navigate = useNavigate();
  const uri: string = "http://localhost:8088/api/movies"


  /**
   * UseEffect for fetching the categories
   */
  useEffect(() => {
    fetchCategories();
  }, [])

  
  /**
   * UseEffect for fetching the actors
   */
  useEffect(() => {
    fetchActors();
  }, [])

  
  /**
   * UseEffect for fetching the directors
   */
  useEffect(() => {
    fetchDirectors();
  }, [])


  /**
   * Function to fetch all categories from the API
   */
  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8088/api/categories'); 
      setAllCategories(response.data.data);
    } catch (error) {
      console.error('error:' + error);
    }

  };

    /**
   * Function to fetch all directors from the API
   */
    const fetchDirectors = async () => {
      try {
        const response = await axios.get('http://localhost:8088/api/directors'); 
        setallDirectors(response.data.data);
      } catch (error) {
        console.error('error:' + error);
      }
  
    };


  /**
   * Function to fetch all actors from the API
   */
  const fetchActors = async () => {
    try {
      const response = await axios.get('http://localhost:8088/api/actors'); 
      setallActors(response.data.data);
    } catch (error) {
      console.error('error:' + error);
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


    const newMovie: MovieType = {
      titulo: title,
      year: year,
      direccion: selectedDirectors,
      actores: selectedActors,
      categorias: selectedCategories,
      descripcion: description? description : 'TBA',
      caratula: image ? image : 'default.jpg',
      trailer: trailer ? trailer : 'https://youtu.be/_htiXfLqXxU?si=MZp0o1GEhpL5_hkj',
    };

    try {
      await axios.post(uri, newMovie);
    } catch (error) {
      console.error("Error creating the movie:", error);
    }

    navigate('/movies/');
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


  /**
   * Handle actor and director changes
   */
  const handleActorListChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = getSelectedValues(event.target.selectedOptions);
    setActorList(selectedValues);
  };

  const handleDirectorListChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = getSelectedValues(event.target.selectedOptions);
    setDirectorsList(selectedValues);
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
                  <select
                      multiple
                      className={`custom-select${context.theme === 'dark' ? '' : '-light'}`}
                      onChange={handleDirectorListChange}
                      size={allDirectors.length} 
                    >
                      {allDirectors.map((director, index) => (
                        <option key={index} value={index}>
                          {director.nombre} {director.apellidos}
                        </option>
                      ))}
                    </select>
                </div>

                <div className="col-12 col-md-6">
                  <label className={`${context.theme === 'dark' ? '' : 'label-light'}`}>
                    <strong>Main actors/actress</strong>
                  </label>
                  <select
                      multiple
                      className={`custom-select${context.theme === 'dark' ? '' : '-light'}`}
                      onChange={handleActorListChange}
                      size={allActors.length} 
                    >
                      {allActors.map((actors, index) => (
                        <option key={index} value={index}>
                          {actors.nombre} {actors.apellidos}
                        </option>
                      ))}
                    </select>
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
                    onChange={(e) => setYear((e.target.value))}
                    defaultValue={year}
                    required
                  />

                  <label className={`mt-2 ${context.theme === 'dark' ? '' : 'label-light'}`}>
                    <strong>Trailer</strong>
                  </label>
                  <input
                    type="text"
                    name="trailer"
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
                      {allCategories.map((category, index) => (
                        <option key={index} value={index}>
                          {category.nombre}
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