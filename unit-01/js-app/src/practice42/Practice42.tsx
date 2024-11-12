import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Practice31 from '../practice31/Practice31.tsx';
import Practice20 from '../practice20/Practice20.tsx';

type Props = {}

function Practice42({}: Props) {
  return (
    <>
    <nav className="navbar">
        <Link to="/memorize8"> Memorize8</Link>
        <Link to="/guessnum">Guess num </Link>
    </nav>
        <Routes>
            <Route path="/memorize8" element={<Practice31 />} />
            <Route path="/guessnum" element={<Practice20 />} />
        </Routes>
    </>
  )
}

export default Practice42