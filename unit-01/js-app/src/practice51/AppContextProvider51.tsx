import React, { Dispatch, SetStateAction, createContext, useContext, useState } from 'react'


interface AppContextType {
    username: string | null;
    setUsername: Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

const AppContextProvider51 = (props: any) => {
    const [username, setUsername] = useState<string>("");

    const contextValues : AppContextType = {
        username: username,
        setUsername: setUsername
    }

  return (
        <AppContext.Provider value={contextValues}>
            {props.children}
        </AppContext.Provider>
  )
}

export const useAppContext = () =>{
    return useContext(AppContext);
}

export default AppContextProvider51