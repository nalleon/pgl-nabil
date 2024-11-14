import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import PokemonListModify from './PokemonListModify.tsx';
import PokemonCardModify from './PokemonCardModify.tsx';

type Props = {}

const PokemonApp = (props: Props) => {
    return (
        <BrowserRouter>
            <h1> Pokemon App</h1>
            <Navbar />
            <Routes>
                <Route path="/" element={<PokemonListModify />} />
                <Route path="/pokemon/:pokemonId" element={< PokemonCardModify/>} />
            </Routes>
        </BrowserRouter>
        );
    }
    
    function Navbar() {
        return (
            <nav>
                <Link to="/">Pokedex </Link>
                <Link to="/capitals"> Capitals </Link>
            </nav>
        );
    }

export default PokemonApp