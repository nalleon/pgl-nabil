import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import PokemonList50 from './PokemonList52.tsx';
import PokemonCard50 from './PokemonCard52.tsx';
import AppContextProvider52 from './AppContextProvider52.tsx';
import PokemonFavourite52 from './PokemonFavourite52.tsx';


type Props = {}

const App52 = (props: Props) => {


    return (
        <>
            <BrowserRouter>
                <AppContextProvider52>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<PokemonList50 />} />
                        <Route path="/pokemon/:pokemonId" element={< PokemonCard50/>} />
                        <Route path="/pokemon/favourite" element={<PokemonFavourite52 />} />
                    </Routes>
                </AppContextProvider52>
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

export default App52