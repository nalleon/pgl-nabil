import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Practice48 from './PersonList.tsx'
import Person48 from '../Model/Person48'
import PersonCard from './PersonCard48.tsx'
import DeletePerson from './DeletePerson.tsx'

type Props = {}

const App48 = (props: Props) => {
    return (
        <>
            <BrowserRouter>
                <h1>App</h1>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Practice48 />} />
                    <Route path="/person/:id" element={<PersonCard/>}/>
                    <Route path="/person/delete" element={<DeletePerson/>}/>

                </Routes>
            </BrowserRouter>
        </>
    )

    function Navbar() {
        return (
            <nav>
                <Link to="/"> Persons </Link>
                <Link to="/person/delete"> Delete </Link>
            </nav>
        );
    }
}

export default App48