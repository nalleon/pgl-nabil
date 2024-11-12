import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Practice36 from '../practice36/Practice36.tsx';
import Practice27 from '../practice27/Practice27.tsx';
import About from './About.tsx';
import Practice21 from '../practice21/Practice21.tsx';

type Props = {}

const Practice41 = (props: Props) => {
    return (
        <>
        <nav className="navbar">
            <Link to="/"> About </Link>
            <Link to="/cronometer"> Cronometer</Link>
            <Link to="/worldwidewatchs">Worldwide Watchs </Link>
            <Link to="/imc">Imc </Link>
        </nav>
            <Routes>
                <Route path="/cronometer" element={<Practice27 />} />
                <Route path="/worldwidewatchs" element={<Practice21 />} />
                <Route path="/imc" element={<Practice36 />} />
                <Route path="/" element={<About />} />
            </Routes>
        </>
    )
}

export default Practice41