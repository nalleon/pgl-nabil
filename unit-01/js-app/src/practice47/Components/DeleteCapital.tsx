import axios from 'axios';
import React from 'react'

type Props = {}

const DeleteCapital = (props: Props) => {


    function deleteCapitalFromApi(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        let form: HTMLFormElement = event.currentTarget;
        let inputCapitalName: HTMLInputElement = form.capitalName;
    
        let name:string = inputCapitalName.value;
        const capitalId = name.toLowerCase();

        const route: string = "http://localhost:3000/capitales/"+capitalId;

        const axiospost = async(capitalRoute:string)=>{
            try{
                const response = await axios.delete(capitalRoute)
                console.log(response.data);
            }catch(error){
            console.log(error);
            }
        }
        axiospost(route);
    }


    return (
    <>
        <form onSubmit={deleteCapitalFromApi}>
                Name: <input type="text" name="capitalName" /><br />
            <button type="submit">Delete </button>
        </form>
    </>
    )
}

export default DeleteCapital