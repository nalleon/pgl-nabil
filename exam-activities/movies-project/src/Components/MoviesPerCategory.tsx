import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/MoviesPerCategory.css';

type Props = {}

type CategoryType = {
    id: number;
    name: string;
    description: string;
}

type MovieType = {
    id: string;
    title: string;
    actor: string;
    director: string;
    genre: string;
    year: number;
    description: string;
    image: string;
    trailer: string;
    categories: number[];
};

const MoviesPerCategory = (props: Props) => {
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [filteredMovies, setFilteredMovies] = useState<MovieType[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const uri = 'http://localhost:3000/';

    useEffect(() => {
        fetchCategories();
        fetchMovies();    
    }, [selectedCategory, filteredMovies])
    
    /**
     * Function to fetch categories from the api
     */
    const fetchCategories = async () => {
        try {
            const response = await axios.get(uri+'categories');
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }

    /**
     * Function to fetch movies from the API
     */
    const fetchMovies = async () => {
        try {
            const response = await axios.get(uri + 'movies');
            setMovies(response.data);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    const handleCategoryClick = (categoryId: number) => {
        setSelectedCategory(categoryId);

        let filteredMoviesAux: MovieType[] = [];
        
        for (let i = 0; i < movies.length; i++) {
            for (let j = 0; j < movies[i].categories.length; j++) {
                if (movies[i].categories[j] == categoryId) {
                    filteredMoviesAux.push(movies[i]);
                }
            }
        }

        setFilteredMovies(filteredMoviesAux); 
        console.log(filteredMoviesAux);
    };

        
    return (
        <>
            <div className="container">
                <div className='justify-content-center align-items-center'>
                    <h2 className='text-center text-uppercase fw-bold title'>Categories</h2>
                </div>
                <div className="row flex-wrap">
                    <div className="row">
                        {categories.map((category) => (
                            <div className="col-12 col-md-4">
                                <div
                                    key={category.id}
                                    className={`col-4 mt-4 category-name-custom-card${selectedCategory === category.id ? '-selected' : ''}`}
    
                                    onClick={() => handleCategoryClick(category.id)}
                                >
                                    <h5 className='fw-bold text-uppercase'>{category.name}</h5>
                                    <p>{category.description}</p>
                                </div>  
                            </div>

                        ))}
                    </div>
                </div>
                <div className="row mt-5">
                    {filteredMovies.length > 0 && (
                        <div className="row flex-wrap">
                            {filteredMovies.map((movie, index) => (
                            <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-2 mb-3">
                                <div className="category-custom-card">
                                <Link to={`/movies/${movie.id}`} 
                                        className='link-offset-2 link-underline link-underline-opacity-0'>
                                    <img
                                    src={`${uri}${movie.image}`} 
                                    alt={movie.title} 
                                    className="category-custom-img" 
                                    />
                                    <div className="category-custom-title">
                                        {movie.title}
                                    </div>
                                </Link>
                                </div>
                            </div>
                            ))}
                        </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default MoviesPerCategory