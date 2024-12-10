import React, { useContext } from 'react'
import CreateMovie from './CreateMovie';
import UpdateMovie from './UpdateMovie';
import FindMovie from './FindMovie';
import Login from './Login';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/Theme.css';

import ThemeSwitcher from './ThemeSwitcher';
import AppThemeContextProvider, { AppThemeContext } from './Context/AppThemeContextProvider';
import MovieDetails from './MovieDetails';
import FavouriteMovieContextProvider from './Context/FavouriteMoviesContextProvider';
import FavouritesMovies from './FavouritesMovies';
import AppLoginContextProvider, { UserContext } from './Context/AppLoginContextProvider';
import MoviesPerCategory from './MoviesPerCategory';
import CreateCategory from './CreateCategory';


type Props = {}

const MoviesApp = (props: Props) => {
    return (
        <BrowserRouter>
            <AppLoginContextProvider>
                    <AppThemeContextProvider>
                        <FavouriteMovieContextProvider>
                            <Navbar />
                            <ShowContextButtons/>
                            <Routes>
                                <Route path="/" element={<Login />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/movies" element={<FindMovie/>}/>
                                <Route path="/movies/create" element={<CreateMovie/>}/>
                                <Route path="/movies/:movieId" element={<MovieDetails/>}/>
                                <Route path="/movies/modify/:movieId" element={<UpdateMovie/>}/>
                                <Route path="/favourites" element={<FavouritesMovies/>}/>
                                <Route path="/movies/categories" element={<MoviesPerCategory/>}/>
                                <Route path="/create-category" element={<CreateCategory/>}/>
                            </Routes>
                            <Footer/>
                        </FavouriteMovieContextProvider>
                    </AppThemeContextProvider>
            </AppLoginContextProvider>
        </BrowserRouter>
    )

    function Navbar() {
        const context = useContext(AppThemeContext);
        return (
            <nav className={`d-flex justify-content-center navbar navbar-expand-lg 
                                ${context.theme === 'dark' ? 'navbar-dark-theme' : 'navbar-light-theme'
                            }`}>
                <div className="container-fluid">
                    <h3 className="mt-2 me-2 ms-2"><Link to="/movies" className='link-light link-offset-2 link-underline link-underline-opacity-0 m-3'><i className="ms-3 bi bi-film text-light me-2"></i>Movies </Link></h3>
                    <button className="navbar-toggler" style={{  backgroundColor: 'rgb(223, 164, 62)'}}
                            type="button" data-bs-toggle="collapse" data-bs-target="#navBar" aria-controls="navBar" aria-expanded="true" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                        <div id="navBar" className="collapse navbar-collapse">
                            <ul className="d-flex align-items-start navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                                <li className="list-group-item m-1"><Link to="/movies" className='link-secondary link-offset-2 link-underline link-underline-opacity-0 m-3 '> Movies </Link></li>
                                <li className="list-group-item m-1"><Link to="/movies/create/" className='link-secondary link-offset-2 link-underline link-underline-opacity-0 m-3'> Create </Link></li>                       
                                <li className="list-group-item m-1"><Link to="/favourites" className='link-secondary link-light-hover link-offset-2 link-underline link-underline-opacity-0 m-3' >Favourites </Link></li>
                                <li className="list-group-item m-1"><Link to="/movies/categories" className='link-secondary link-light-hover link-offset-2 link-underline link-underline-opacity-0 m-3' >Categories </Link></li>
                                <li className="list-group-item m-1"><Link to="/login" className='link-secondary link-light-hover link-offset-2 link-underline link-underline-opacity-0 m-3' >Login/Logout </Link></li>
                                <li className="list-group-item m-1"><Link to="/create-category" className='link-secondary link-light-hover link-offset-2 link-underline link-underline-opacity-0 m-3' >Create category </Link></li>

                            </ul>
                        </div>
                </div>
            </nav>
        );
    }

    function ShowContextButtons(){
        const context = useContext(UserContext);
        return (
            <nav aria-label="breadcrumb" className="d-flex justify-content-between breadcrumb-custom">
                <span className='ms-3'></span>
                <div className='row d-inline'>
                    <div className="col-12">
                        { context.user?.username !== ''  &&
                            <Link to={'/favourites'} className='link-secondary link-light-hover link-offset-2 link-underline link-underline-opacity-0 m-3'> 
                                <i className="bi bi-person-circle me-2"></i>{context.user?.username} 
                            </Link>
                        }
                        <ThemeSwitcher />
                    </div>
                </div>
        </nav>
        )
    }

    function Footer(){
        const context = useContext(AppThemeContext);

        return (
            <footer className={`${context.theme === 'dark' ? 'navbar-dark-theme' : 'navbar-light-theme'}
                text-center text-light-hover`}>
                <div className="container p-4">
                    <span>Copyright © 2024 - MoviesApp</span>
                </div>
            </footer>
        )
    }

}

export default MoviesApp