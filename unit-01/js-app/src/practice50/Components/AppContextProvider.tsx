import React, { Dispatch, SetStateAction, createContext, useContext, useState } from 'react'


type Props = {}


interface IResult {
    name: string;
    sprite: string;
    height: number;
    weight: number;
}

interface AppContextType {
    favourite: IResult | null;
    setFavourite: Dispatch<SetStateAction<IResult | null>>;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

const AppContextProvider = (props: any) => {
    const [favouritePokemon, setFavouritePokemon] = useState<IResult | null>({} as IResult);

    const contextValues : AppContextType = {
        favourite: favouritePokemon,
        setFavourite: setFavouritePokemon
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

export default AppContextProvider