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
  favourites: number[];
  addFavourite: (id: number) => boolean;
  removeFavourite: (id: number) => void;
}

type Props = {
  initialFavourites?: number[];
  children: React.ReactNode;
}


export const FavouriteMovieContext = createContext<FavouriteMovieContextType >({} as FavouriteMovieContextType );

/**
 * Function to create the app theme context provider
 * @param {Props} props - Props for the context provider
 */
function FavouriteMovieContextProvider(props: Props) {

  /**
   * UseState for the movies
   */
  const [favourites, setFavourites] = useState<number[]>(() => {
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
  const addFavourite = (id: number) => {
    if(favourites.find(element => element === id)){
      return false;
    }

    setFavourites([...favourites, id]);
    localStorage.setItem('favourites', JSON.stringify(favourites));
    return true;
  }

  /**
   * Function to remove a movie from the favorites list
   * @param id of the movie to remove
   */
  const removeFavourite = (id: number) => {
    const auxArr = favourites.filter((element) => element != id); 
    console.log(auxArr);
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