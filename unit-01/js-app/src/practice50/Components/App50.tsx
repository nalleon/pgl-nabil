import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import PokemonList50 from './PokemonList50.tsx';
import PokemonCard50 from './PokemonCard50.tsx';
import AppContextProvider from './AppContextProvider.tsx';
import PokemonFavourite from './PokemonFavourite.tsx';


type Props = {}

const App50 = (props: Props) => {


    return (
        <>
            <BrowserRouter>
                <AppContextProvider>
                    <Navbar />
                    
                    <Routes>
                        <Route path="/" element={<PokemonList50 />} />
                        <Route path="/pokemon/:pokemonId" element={< PokemonCard50/>} />
                        <Route path="/pokemon/favourite" element={<PokemonFavourite />} />
                    </Routes>
                </AppContextProvider>
            </BrowserRouter>
        </>
        );
    }
    
    function Navbar() {
        return (
            <nav>
                <Link to="/">Pokedex </Link>
                <Link to="/pokemon/favourite"> Pokémon Fav </Link>
            </nav>
        );
    }

export default App50