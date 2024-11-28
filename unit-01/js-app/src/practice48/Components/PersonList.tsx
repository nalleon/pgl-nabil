import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

type Person = {
    id: number;
    name: string;
    surname: string;
    age: number;
    height: number;
    weigth: number;
    imc: number;
};

const PersonList = () => {
    const [persons, setPersons] = useState<Person[]>([]);
    const url = 'http://localhost:3000/persons';

    useEffect(() => {
        fetchPersons();
    }, []);

    const fetchPersons = async () => {
        const response = await axios.get(url);
        let list = response.data;
        setPersons(list);
    };

    return (
    <div className="container">
            {persons.map((person, index) => {
                return <div key={index}>
                            <Link to={`/person/${person.id}`}>
                                {person.name} {person.surname}
                            </Link>
                        </div>
            })}
        </div>
    );
};

export default PersonList;
