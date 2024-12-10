import React, { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from 'react'

/**
 * @author Nabil Leon Alvarez <@nalleon>
 */

/**
 * Favourites movies context provider
 */

/**
 * FavouriteMovie type definition
 */

type FavouriteMovieContextType  = {
  favourites: MovieType[];
  addFavourite: (movie: MovieType) => boolean;
  removeFavourite: (id: number) => void;
}

/**
 * Movie type definition
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


export const FavouriteMovieContext = createContext<FavouriteMovieContextType >({} as FavouriteMovieContextType );

/**
 * Function to create the app theme context provider
 * @param {any} props - Props for the context provider
 */
function FavouriteMovieContextProvider(props: any) {

  /**
   * UseState for the movies
   */
  const [favourites, setFavourites] = useState<MovieType[]>(() => {
      const storedFavourites =  localStorage.getItem('favourites');
      return storedFavourites ? JSON.parse(storedFavourites) : [];
    }
  );

  /**
   * UseEffect to save the movies if it changes
   */
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites])
  

  /**
   * Function to add a new movie to the favorites list
   * @param movie to add
   * @return false if the movie already exists, otherwise true
   */
  const addFavourite = (movie: MovieType) => {
    if(favourites.find(element => element.id === movie.id)){
      return false;
    }

    setFavourites([...favourites, movie]);
    localStorage.setItem('favourites', JSON.stringify(favourites));
    return true;
  }

  /**
   * Function to remove a movie from the favorites list
   * @param id of the movie to remove
   */
  const removeFavourite = (id: number) => {
    const auxArr = favourites.filter((movie) => movie.id != id); 
    console.log(auxArr);
    localStorage.setItem('favourites', JSON.stringify([...auxArr]));
    setFavourites([...auxArr]);
  }


  /**
   * Function to remove a movie from the favorites list
   * @param id of the movie to remove
   */
  const updateFavourite = (id: number) => {
    const auxArr = favourites.filter((movie) => movie.id != id); 
    localStorage.setItem('favourites', JSON.stringify([...auxArr]));
    setFavourites([...auxArr]);
  }

  /**
   * Context values 
   */
  const contextValues: FavouriteMovieContextType  = {
    favourites,
    addFavourite,
    removeFavourite,
  }

  return (
      <FavouriteMovieContext.Provider value={contextValues}>
          {props.children}
      </FavouriteMovieContext.Provider>
  )
}

export default FavouriteMovieContextProvider