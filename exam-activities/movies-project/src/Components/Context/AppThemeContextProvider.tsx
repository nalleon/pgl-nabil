import React, { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from 'react'

/**
 * @author Nabil Leon Alvarez <@nalleon>
 */

/**
 * App theme context provider
 */

type ThemeContextType = {
    theme: string
    toggleTheme: () => void;
}


export const AppThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

/**
 * Function to create the app theme context provider
 * @param {any} props - Props for the context provider
 */
function AppThemeContextProvider(props: any) {

  /**
   * UseState for the theme
   */
  const [theme, setTheme] = useState<string>(() =>{
    return localStorage.getItem('theme') || 'dark';
  });

  /**
   * UseEffect to save the theme if it changes
   */
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme])
  

  /**
   * Function to change the theme to a state (light or dark)
   */
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));  }

  /**
   * Context values 
   */
  const contextValues: ThemeContextType = {
    theme,
    toggleTheme
  }

  return (
      <AppThemeContext.Provider value={contextValues}>
        <div className={theme}>          
          {props.children}
        </div>

      </AppThemeContext.Provider>
  )
}

export default AppThemeContextProvider