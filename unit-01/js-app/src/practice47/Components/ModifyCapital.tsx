import axios from 'axios';
import React, { useState } from 'react'
import { useAppContext } from '../../practice51/AppContextProvider51.tsx';

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
    const [capital, setCapital] = useState<ICapital>({} as ICapital);
    const [name, setName] = useState<string>();
    const [year, setYear] = useState<number>();
    const [population, setPopulation] = useState<number>();
    const { username } = useAppContext(); 


    function modifyCapitalFromApi(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();

        let form: HTMLFormElement = event.currentTarget;
        let inputcapitalName: HTMLInputElement = form.capitalName;
        let inputcapitalYear: HTMLInputElement = form.capitalName;
        let inputcapitalPopulation: HTMLInputElement = form.capitalName;

        let name:string = inputcapitalName.value;

        const capitalId = capital.nombre.toLowerCase();
        const year: number = parseInt(inputcapitalYear.value);
        const population: number = parseInt(inputcapitalPopulation.value);
    
        const updateCapital = {
            "id": capitalId,    
            "nombre": name,
            "datos": {
                    0: {
                        "poblacion": population,
                        "anio": year
                    }
                },
            "foto": capitalId+".png"    
        }

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
        setcurrentIndex(0);
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
        setName(capital?.nombre?.toString());
        setYear(capital?.datos[0].anio);
        setPopulation(capital?.datos[0].poblacion);
        setcurrentIndex(1);
    }
    
    return (
    <>
        <h2>Modify Capital</h2>
        {username && <span>Hello {username}!</span>}
        <br />
        <form onSubmit={getCapitalFromAPi}>
                Name: <input type="text" name="capitalNameSearch" /><br />
            <button type="submit">Search </button>
        </form>
        <br />
        {currentIndex != 0 &&
            <div>
                <form onSubmit={modifyCapitalFromApi} name='modifyForm'>
                        Name: <input type="text" name="capitalName" onChange={(e)=> setName(e.target.value)} value={name}/><br />
                        Year: <input type="number" name="capitalYear" onChange={(e)=> setYear(Number(e.target.value))} value={year} /><br />
                        Population: <input type="number" id="capitalPopulation" onChange={(e)=> setPopulation(Number(e.target.value))} value={population} /> <br />
                    <button type="submit">Update </button>
                </form>
            </div>
        }
    </>
    )
}

export default ModifyCapital