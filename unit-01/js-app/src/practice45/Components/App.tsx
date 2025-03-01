import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import PokemonListModify from './Pokedex/PokemonListModify.tsx';
import PokemonCardModify from './Pokedex/PokemonCardModify.tsx';
import CapitalCardModify from './Capital/CapitalCardModify.tsx';
import CapitalListModify from './Capital/CapitalListModify.tsx';

type Props = {}

const Practice45 = (props: Props) => {
    return (
        <>
            <BrowserRouter>
        
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<PokemonListModify />} />
                        <Route path="/capitals" element={<CapitalListModify/>}/>
                    </Routes>
                    <Routes>
                        <Route path="/pokemon/:pokemonId" element={< PokemonCardModify/>} />
                        <Route path="/capitals/capital/:capitalId" element={<CapitalCardModify/>}/>
                    </Routes>
            </BrowserRouter>
        </>
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

export default Practice45