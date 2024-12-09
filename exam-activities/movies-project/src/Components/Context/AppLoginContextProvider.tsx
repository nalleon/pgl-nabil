import React, { createContext, useContext, useEffect, useState } from 'react'
import { AppThemeContext } from './AppThemeContextProvider';
import { FavouriteMovieContext } from './FavouriteMoviesContextProvider';

type Props = {}

type UserContextType = {
  user: UserType | null;
  login: (username: string) => void;
  logout: () => void;
  addFavourites: (movie : MovieType) => void;
  updateTheme: () => void;
};

type UserType = {
  username: string;
  favourites: MovieType[];
  theme: string;
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

export const UserContext = createContext<UserContextType>({} as UserContextType);

const AppLoginContextProvider = (props: any) => {
  const contextTheme  = useContext(AppThemeContext);
  const contextFavourites = useContext(FavouriteMovieContext);

  const [user, setUser] = useState<UserType>(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : defaultUser;
  });

  const defaultUser: UserType = {
    username: 'anonymous',
    favourites: [],
    theme: 'dark'
  };
  
  
  useEffect(() => {
    if (user && user.username !== 'anonymous') {
      localStorage.setItem(user.username, JSON.stringify(user));
    }
  }, [user])


  const login = (username: string) => {
    setUser({
      username: username,
      favourites: contextFavourites.favourites, 
      theme: contextTheme.theme,          
    });

  };

  const logout = () => {
    setUser(defaultUser);
  };


  const addFavourites = (movie : MovieType) => {
    contextFavourites.addFavourite(movie);
  }

  const updateTheme = () => {
    contextTheme.toggleTheme();
  }

  /**
   * Context values 
   */
    const contextValues: UserContextType  = {
      user,
      login,
      logout,
      addFavourites,
      updateTheme
    }
    
  return (
    <UserContext.Provider value={contextValues}>
      {props.children}
    </UserContext.Provider>
  )
}

export default AppLoginContextProvider