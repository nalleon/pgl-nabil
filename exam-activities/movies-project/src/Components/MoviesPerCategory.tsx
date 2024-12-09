import axios from 'axios';
import React, { useEffect, useState } from 'react'

type Props = {}

type CategoryType = {
    id: number;
    name: string;
    descriptoin: string;
}
const MoviesPerCategory = (props: Props) => {
    const [categories, setCategories] = useState<CategoryType[]>([]);

    const uri = 'http://localhost:3000/';

    useEffect(() => {
        fetchCategories();
    }, [])
    
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

        
    return (
        <>
            <div className="container">
                <h3>CATEGORIES</h3>
                <div className="row">
                    
                </div>
            </div>
        </>
    )
}

export default MoviesPerCategory