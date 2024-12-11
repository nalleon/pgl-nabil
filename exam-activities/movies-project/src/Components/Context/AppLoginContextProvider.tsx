import React, { createContext, useContext, useEffect, useState } from 'react'
import AppThemeContextProvider, { AppThemeContext } from './AppThemeContextProvider';
import { FavouriteMovieContext } from './FavouriteMoviesContextProvider';
import FavouriteMovieContextProvider from './FavouriteMoviesContextProvider';

type Props = {}

type UserContextType = {
  user: UserType | null;
  login: (username: string) => void;
  logout: () => void;
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
  
  const [user, setUser] = useState<UserType>(defaultUser);



  const login = (username: string) => {
    const storedUser = localStorage.getItem(username);
    if(storedUser){
      setUser(JSON.parse(storedUser));
    } else {
      setUser(
        {
          username: username,
          favourites: [],
          theme: 'dark',          
        }
      );
    
    }
  };

  const logout = () => {
    setUser(defaultUser);
  };


  /**
   * Context values 
   */
    const contextValues: UserContextType  = {
      user,
      login,
      logout
    }
    
  return (
    <UserContext.Provider value={contextValues}>
      {user && user.username !== 'anonymous' ? (
        <AppThemeContextProvider initialTheme={user.theme}>
          <FavouriteMovieContextProvider initialFavourites={user.favourites}>
            {props.children}
          </FavouriteMovieContextProvider>
        </AppThemeContextProvider>
      ) : (
        props.children
      )}
    </UserContext.Provider>
  )
}

export default AppLoginContextProvider