import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {}

/**
 * Type definition for category
 */

type CategoryType = {
    id: number;
    name: string;
    description: string;
};

const CreateCategory = (props: Props) => {
    /**
     * UseStates
     */
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [allCategories, setAllCategories] = useState<CategoryType[]>([])
    /**
     * Other properties
     */
    const uri: string = "http://localhost:3000/categories";
    let navigate = useNavigate();


    useEffect(() => {
        fetchCategories();
    }, []);

    /**
     * Function to fetch all current categories available
     */
    const fetchCategories = async () => {
        try {
            const response = await axios.get(uri); 
            setAllCategories(response.data);
        } catch (error) {
        console.error('Error fetching categories:', error);
        }
    };

    /**
     * Function to handle de submit of a new category
     * @param event 
     */
    const handleSubmit = async (event : React.FormEvent) => {
        event.preventDefault();

        const id = getNextId(allCategories);
        const newCategory: CategoryType = {
            id,
            name,
            description
        };

        try {
            await axios.post(uri, newCategory);
        } catch (error) {
            console.error("Error creating category:", error);
        } 

        navigate('/movies/categories');
    }


    /**
   * Function to get the next Id for the new Movie
   * @param categories to retrieve the last id at the moment
   * @returns next id 
   */
    const getNextId = (categories : CategoryType[]) => {
        const lastCategory = categories[categories.length - 1];
        const id = parseInt(lastCategory.id.toString()) + 1;
        return id;
    }

    return (
        <>
        </>
    )
}

export default CreateCategory