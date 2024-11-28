import React, { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from 'react'


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

const AppContextProvider52 = (props: any) => {
    const [favouritePokemon, setFavouritePokemon] = useState<IResult | null>({} as IResult);


    useEffect(() => {
        const favouriteLExists = localStorage.getItem('favouritePokemon');
        if (favouriteLExists) {
            setFavouritePokemon(JSON.parse(favouriteLExists));
        }

    }, []);
    
    useEffect(() => {
        if (favouritePokemon) {
            localStorage.setItem('favouritePokemon', JSON.stringify(favouritePokemon));
        }
    }, [favouritePokemon]);


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

export const useAppContext52 = () =>{
    return useContext(AppContext);
}

export default AppContextProvider52