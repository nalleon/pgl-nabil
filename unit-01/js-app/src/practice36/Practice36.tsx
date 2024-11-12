import React, { ChangeEvent, ReactEventHandler, useEffect, useRef, useState } from 'react'
import Person from './model/Person.ts';
import './Practice36.css'
import PersonCard from './PersonCard.tsx';

const Practice36 = () => {
  const [personList, setPersonList] = useState<Person[]>([]);

  function addPerson (person: Person) : void {
    setPersonList([...personList, person]);
  };

  return (
    <>
      <button onClick={() => addPerson(new Person())}>+</button>

      <div className='main-container'>

        {personList.map(person => (
            <PersonCard key={person.getId()} person={person} />
        ))}
      </div>

    </>
  )
}

export default Practice36




