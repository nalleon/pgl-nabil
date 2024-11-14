import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CapitalCard46 from '../../practice46/Components/CapitalCard46.tsx';
import CapitalList46 from '../../practice46/Components/CapitalList46.tsx';
import CreateCapital from '../../practice46/Components/CreateCapital.tsx';
import ModifyCapital from './ModifyCapital.tsx';
import DeleteCapital from './DeleteCapital.tsx';


type Props = {}

const CapitalApp47 = (props: Props) => {
    return (
        <>
            <BrowserRouter>
                <h1>App</h1>
                <Navbar />
                <Routes>
                    <Route path="/" element={<CapitalList46 />} />
                    <Route path="/capitals" element={<CapitalList46/>}/>
                    <Route path="/capitals/capital/:capitalId" element={<CapitalCard46/>}/>
                    <Route path="/capitals/create-capital" element={<CreateCapital/>}/>
                    <Route path="/capitals/modify-capital" element={<ModifyCapital/>}/>
                    <Route path="/capitals/delete-capital" element={<DeleteCapital/>}/>
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
                <Link to="/capitals/modify-capital"> Modify </Link>
                <Link to="/capitals/delete-capital"> Delete </Link>
            </nav>
        );
    }

export default CapitalApp47;