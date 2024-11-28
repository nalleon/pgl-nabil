
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Person48 from '../Model/Person48';
import { useNavigate, useParams } from 'react-router-dom';



type Person = {
    id: number;
    name: string;
    surname: string;
    age: number;
    height: number;
    weigth: number;
    imc: number;
};

const PersonCard = () => {
    const { id } = useParams<{ id: string }>();
    const [person, setPerson] = useState<Person | null>(null);
    const navigate = useNavigate();

    const [name, setname] = useState(person?.name);
    const [surname, setsurname] = useState(person?.surname);
    const [height, setheight] = useState(person?.height);
    const [age, setage] = useState(person?.age);
    const [weigth, setweighth] = useState(person?.weigth);
    const [imc, setimc] = useState(person?.imc);

    const url = `http://localhost:3000/persons/${id}`;

    useEffect(() => {
        fetchPerson();
    }, [id])
    
    async function fetchPerson() {
        const response = await axios.get(url);
        const result = response.data;
        setPerson(result);
        setname(result.name);
        setsurname(result.surname);
        setheight(result.height);
        setage(result.age);
        setweighth(result.weigth);
        setimc(result.imc);
        setPerson(response.data);
    }
    

    async function processForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const updatedPerson = {
            ...person,
            name,
            surname,
            age,
            weigth,
            height,
            imc: calculateIMC(height ?? 0, weigth ?? 0),
        };
;
        await axios.put(url, updatedPerson);
        navigate('/');
    }


    function calculateIMC(height : number, weigth :number) : number {
        if(height === 0 || weigth === 0) {
            return 0;
        }

        let heightMeter = height/100;
        return weigth / (heightMeter*heightMeter);
    }

    return (
        <>
            <div className='card'>
                <form onSubmit={processForm}>
                <div>
                    <p>{person?.id}</p>
                </div>
                <div>
                    <label htmlFor="nameId">Name</label>
                </div>
                <div>
                    <input type="text" name='namePerson' id='nameId' onChange={(e) => setname(e.target.value)} value={name}/>
                </div>
                <div>
                    <label htmlFor="surnameId">Surname</label>
                </div>
                <div>
                    <input type="text" name='surnamePerson' id='surnameId' onChange={(e) => setsurname(e.target.value)} value={surname}/>
                </div>
                <div>
                    <label htmlFor="heightId">Height</label>
                </div>
                <div>
                    <input type="text" name='heightPerson' id='heightId' onChange={(e) => setheight(Number(e.target.value))} value={height}/>
                </div>
                <div>
                    <label htmlFor="ageId">Age</label>
                </div>
                <div>
                    <input type="text" name='agePerson' id='ageId' onChange={(e) => setage(Number(e.target.value))} value={age}/>
                </div>
                <div>
                    <label htmlFor="heighthId">Weight</label>
                </div>
                <div>
                    <input type="text" name='weightPerson' id='weightId' onChange={(e) => setweighth(Number(e.target.value))} value={weigth}/>
                </div>
                <div>
                    <p>{imc}</p>
                </div>
                <button type='submit'>Process</button>
                </form>
            </div>
        </>
    )
    }
    
    
    export default PersonCard