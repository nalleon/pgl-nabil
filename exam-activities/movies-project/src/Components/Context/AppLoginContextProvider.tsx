import React, { createContext, useContext, useEffect, useState } from 'react'
import AppThemeContextProvider, { AppThemeContext } from './AppThemeContextProvider';
import { FavouriteMoviesContext } from './FavouriteMoviesContextProvider';
import FavouriteMoviesContextProvider from './FavouriteMoviesContextProvider';



/**
 * @author Nabil Leon Alvarez <@nalleon>
 */

/**
 * Props (children)
 */
type Props = {
  children: React.ReactNode;
}

/**
 * Definition of user context type for provider
 */
type UserContextType = {
  user: UserType | null;
  login: (username: string) => void;
  logout: () => void;
};

/**
 * Definition of user type
 */
type UserType = {
  username: string;
  favourites: number[];
  theme: string;
}


/**
 * Context for user/login
 */
export const UserContext = createContext<UserContextType>({} as UserContextType);

const AppLoginContextProvider = (props: Props) => {

  /**
   * Default user definition
   */
  
  const defaultUser: UserType = {
    username: 'anonymous',
    favourites: [],
    theme: 'dark'
  };

  /**
   * UseStates
   */
  const [user, setUser] = useState<UserType>(defaultUser);


  /**
   * Function to login a new or existing user
   * @param username 
   */
  const login = (username: string) => {
    let storedUser = localStorage.getItem(username);
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

  /**
   * Function to logout the current user and go into the default
   */
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
          <FavouriteMoviesContextProvider initialFavourites={user.favourites}>
            {props.children}
          </FavouriteMoviesContextProvider>
        </AppThemeContextProvider>
      ) : (
        props.children
      )}
    </UserContext.Provider>
  )
}

export default AppLoginContextProvider