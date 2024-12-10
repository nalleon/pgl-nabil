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
        <AppThemeContextProvider>
          <FavouriteMovieContextProvider>
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