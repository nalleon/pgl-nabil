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
  addFavourite: (movie: MovieType) => void;
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
  

  const addFavourite = (movie: MovieType) => {
    if(favourites.find(element => element.id === movie.id)){
      return;
    }

    setFavourites([...favourites, movie]);
  }

  const removeFavourite = (id: number) => {
    const auxArr = favourites.filter((movie) => movie.id !== id); 
    setFavourites(auxArr);
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