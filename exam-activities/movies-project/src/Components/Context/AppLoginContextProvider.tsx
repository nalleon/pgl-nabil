import React, { createContext, useContext, useEffect, useState } from 'react'
import { AppThemeContext } from './AppThemeContextProvider';
import { FavouriteMovieContext } from './FavouriteMoviesContextProvider';

type Props = {}

type UserContextType = {
  user: UserType | null;
  login: (username: string) => void;
  logout: () => void;
  addFavourites: (movie : number) => void;
  updateTheme: () => void;
};

type UserType = {
  username: string;
  favourites: number[];
  theme: string;
}


export const UserContext = createContext<UserContextType>({} as UserContextType);

const AppLoginContextProvider = (props: any) => {
  const contextTheme  = useContext(AppThemeContext);
  const contextFavourites = useContext(FavouriteMovieContext);
  
  const defaultUser: UserType = {
    username: 'anonymous',
    favourites: [],
    theme: 'dark'
  };
  
  const [user, setUser] = useState<UserType>(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : defaultUser;
  });


  
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


  const addFavourites = (movie : number) => {
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