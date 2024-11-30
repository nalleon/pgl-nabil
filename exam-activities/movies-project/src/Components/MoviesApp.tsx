import React, { useContext } from 'react'
import AppContextProvider from './Context/AppContextProvider';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import CreateMovie from './CreateMovie';
import UpdateMovie from './UpdateMovie';
import DeleteMovie from './DeleteMovie';
import FindMovie from './FindMovie';
import Login from './Login';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/Theme.css';

import ThemeSwitcher from './ThemeSwitcher';
import AppThemeContextProvider, { AppThemeContext } from './Context/AppThemeContextProvider';


type Props = {}

const MoviesApp = (props: Props) => {
    return (
        <BrowserRouter>
            <AppContextProvider>
                <AppThemeContextProvider>
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
                </AppThemeContextProvider>
            </AppContextProvider>

        </BrowserRouter>
    )

    function Navbar() {
        const context = useContext(AppThemeContext);

        return (
            <nav className={`d-flex justify-content-center navbar navbar-expand-l 
                                ${context.theme === 'dark' ? 'navbar-dark-theme' : 'navbar-light-theme'
                            }`}>
                <div className="container-fluid">
                    <h3 className="mt-2 me-2 ms-2"><Link to="/movies" className='link-light link-offset-2 link-underline link-underline-opacity-0 m-3'><i className="ms-3 bi bi-film text-light me-2"></i>Movies </Link></h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBar" aria-controls="navBar" aria-expanded="true" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                        <div id="navBar" className="collapse navbar-collapse">
                            <ul className="d-flex align-items-start navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                                <li className="list-group-item m-1"><Link to="/movies" className='link-secondary link-offset-2 link-underline link-underline-opacity-0 m-3 '> Movies </Link></li>
                                <li className="list-group-item m-1"><Link to="/movies/find-movie" className='link-secondary link-offset-2 link-underline link-underline-opacity-0 m-3'> Find movie </Link></li>
                                <li className="list-group-item m-1"><Link to="/movies/create-movie" className='link-secondary link-offset-2 link-underline link-underline-opacity-0 m-3'> Create </Link></li>
                                <li className="list-group-item m-1"><Link to="/movies/modify-movie" className='link-secondary link-offset-2 link-underline link-underline-opacity-0 m-3'> Modify </Link></li>                           
                                <li className="list-group-item m-1">  <Link to="/movies/delete-movie" className='link-secondary link-offset-2 link-underline link-underline-opacity-0 m-3'> Delete </Link></li>                            
                                <li className="list-group-item m-1"><Link to="/login" className='link-secondary link-light-hover link-offset-2 link-underline link-underline-opacity-0 m-3' >Login </Link></li>
                                <li className="list-group-item m-1"><ThemeSwitcher/></li>                                                        
                            </ul>
                        </div>
                </div>
            </nav>
        );
    }
}

export default MoviesApp