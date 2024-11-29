import React from 'react'
import AppContextProvider from './AppContextProvider';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import CreateMovie from './CreateMovie';
import UpdateMovie from './UpdateMovie';
import DeleteMovie from './DeleteMovie';
import FindMovie from './FindMovie';
import Login from './Login';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';


type Props = {}

const MoviesApp = (props: Props) => {
    return (
        <BrowserRouter>
        <AppContextProvider>
            <h1>App</h1>
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/movies" element={<MovieList/>}/>
                <Route path="/movies/find-movie" element={<FindMovie/>}/>
                <Route path="/movies/movie/:movieId" element={<MovieDetails/>}/>
                <Route path="/movies/create-movie" element={<CreateMovie/>}/>
                <Route path="/movies/modify-movie" element={<UpdateMovie/>}/>
                <Route path="/movies/delete-movie" element={<DeleteMovie/>}/>
            </Routes>
        </AppContextProvider>
    </BrowserRouter>
    )

    function Navbar() {
        return (
            <nav>
                <Link to="/login">Login </Link>
                <Link to="/movies"> Movies </Link>
                <Link to="/movies/find-movie"> Find movie </Link>
                <Link to="/movies/create-movie"> Create </Link>
                <Link to="/movies/modify-movie"> Modify </Link>
                <Link to="/movies/delete-movie"> Delete </Link>
            </nav>
        );
    }
}

export default MoviesApp