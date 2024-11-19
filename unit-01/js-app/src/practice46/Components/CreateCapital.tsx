import axios from 'axios';
import React from 'react'
import { useAppContext } from '../../practice51/AppContextProvider51.tsx';

type Props = {}

const CreateCapital = (props: Props) => {
    const { username } = useAppContext(); 


    function addCapitalToApi(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        let form: HTMLFormElement = event.currentTarget;
        let inputCapitalName: HTMLInputElement = form.capitalName;
        let inputCapitalYear: HTMLInputElement = form.capitalYear;
        let inputCapitalPopulation: HTMLInputElement = form.capitalPopulation;

        let name:string = inputCapitalName.value;
        let population:number = parseInt(inputCapitalPopulation.value);
        let year:number = parseInt(inputCapitalYear.value);

        const newCapital = {
            "id": name.toLocaleLowerCase(),    
            "nombre": name,
            "datos": {
                    0: {
                        "poblacion": population,
                        "anio": year
                    }
                },
            "foto": "albacete.png"    
        }

        const route: string = "http://localhost:3000/capitales"

        const axiospost = async(capitalRoute:string)=>{
            try{
                const response = await axios.post(capitalRoute, newCapital )
                console.log(response.data);
            }catch(error){
            console.log(error);
            }
        }
        axiospost(route);
    }


    return (
    <>
    
        <h2>Create Capital</h2>
        {username && <span>Hello {username}!</span>}
        <br />
        <form onSubmit={addCapitalToApi}>
                Name: <input type="text" name="capitalName" /><br />
                Year: <input type="number" name="capitalYear" /><br />
                Population: <input type="number" id="capitalPopulation" /> <br />
            <button type="submit">Create </button>
        </form>
    </>
    )
}

export default CreateCapital