import axios from 'axios';
import React, { useState } from 'react'

type Props = {}


interface ICapital {
    id: String;     
    nombre: String;
    datos : IDato [];
    foto: String;    
}

interface IDato {
    poblacion: number;
    anio: number;
}
const ModifyCapital = (props: Props) => {
    const [currentIndex, setcurrentIndex] = useState(0);
    const [capital, setCapital] = useState<ICapital>();

    function modifyCapitalFromApi(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();

        let form: HTMLFormElement = event.currentTarget;
        let inputcapitalNameSearch: HTMLInputElement = form.capitalNameSearch;
    
        let name:string = inputcapitalNameSearch.value;
        const capitalId = name.toLowerCase();

        const route: string = "http://localhost:3000/capitales/"+capitalId;

        const axiospost = async(capitalRoute:string)=>{
            try{
                const response = await axios.post(capitalRoute)
                console.log(response.data);
            }catch(error){
            console.log(error);
            }
        }
        axiospost(route);
    }

    function getCapitalFromAPi(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        let form: HTMLFormElement = event.currentTarget;
        let inputcapitalNameSearch: HTMLInputElement = form.capitalNameSearch;
    
        let name:string = inputcapitalNameSearch.value;
        const capitalId = name.toLowerCase();

        const route: string = "http://localhost:3000/capitales/"+capitalId;

        const axiosGet = async()=>{
            try{
                const response = await axios.get(route)
                setCapital(response.data);
                console.log(response.data);
            }catch(error){
            console.log(error);
            }
        }

        axiosGet();
        setcurrentIndex(1);
    }

    function handleEvent(){

    }

    
    return (
    <>
        <form onSubmit={getCapitalFromAPi}>
                Name: <input type="text" name="capitalNameSearch" /><br />
            <button type="submit">Search </button>
        </form>
        <br />
        {currentIndex != 0 &&
            <div>
                <form onSubmit={modifyCapitalFromApi}>
                        Name: <input type="text" name="capitalName" /><br />
                        Year: <input type="number" name="capitalYear" /><br />
                        Population: <input type="number" id="capitalPopulation" /> <br />
                    <button type="submit">Update </button>
                </form>
            </div>
        }
    </>
    )
}

export default ModifyCapital