import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {}

const DeletePerson = (props: Props) => {
    const navigate = useNavigate();


    function deletePersonFromApi(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        let form: HTMLFormElement = event.currentTarget;
        let inputPersonId: HTMLInputElement = form.personId;
    
        let personId:string = inputPersonId.value;

        const route: string = "http://localhost:3000/persons/"+personId;

        const axiosDelete = async(personRoute:string)=>{
            try{
                const response = await axios.delete(personRoute)
            }catch(error){
                console.log(error);
            }
        }
        
        axiosDelete(route);
        navigate('/');
    }


    return (
    <>
    
        <h2>Delete person</h2>
        <br />
        <form onSubmit={deletePersonFromApi}>
                ID: <input type="text" name="personId" /><br />
            <button type="submit">Delete </button>
        </form>
    </>
    )
}

export default DeletePerson