import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CapitalCard46 from './CapitalCard46.tsx';
import CapitalList46 from './CapitalList46.tsx';
import CreateCapital from './CreateCapital.tsx';


type Props = {}

const CapitalApp = (props: Props) => {
    return (
        <>
            <BrowserRouter>
                <h1>App</h1>
                <Navbar />
                <Routes>
                    <Route path="/" element={<CapitalList46 />} />
                    <Route path="/capitals" element={<CapitalList46/>}/>
                </Routes>
                <Routes>
                    <Route path="/capitals/capital/:capitalId" element={<CapitalCard46/>}/>
                    <Route path="/capitals/create-capital" element={<CreateCapital/>}/>
                </Routes>
            </BrowserRouter>
        </>
        );
    }
    
    function Navbar() {
        return (
            <nav>
                <Link to="/"> </Link>
                <Link to="/capitals"> Capitals </Link>
                <Link to="/capitals/create-capital"> Create </Link>
            </nav>
        );
    }

export default CapitalApp