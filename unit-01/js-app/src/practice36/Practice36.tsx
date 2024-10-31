import React, { useEffect, useRef, useState } from 'react'
import Person from './model/Person.ts';

const Practice36 = (props: Props) => {
  const [personList, setPersonList] = useState<Person[]>([]);

  function processForm(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();

    let form = e.currentTarget;

    const name = form.namePerson.value ?? "";
    const surename = form.surenamePerson.value ?? "";
    const height = form.heightPerson.value ?? 0;
    const age = form.agePerson.value ?? 0;
    const weigth = form.weightPerson.value ?? 0;
    const id = personList.length +1;
    const person = new Person(id, name, surename, height, age, weigth);

    const imcValue = person.calculateIMC();
    person.setImc(imcValue);

    setPersonList([...personList, person]);
  }

  const handleUpdatePerson = (updatedPerson: Person) => {
    setPersonList(prevList => 
        prevList.map(person => person.getId() === updatedPerson.getId() ? updatedPerson : person)
    );
  };

  return (
   
    <>
      <form onSubmit={processForm}>
        <label htmlFor="nameId">Name</label>
        <input type="text" name='namePerson' id='nameId'/>
        <label htmlFor="surenameId">Surename</label>
        <input type="text" name='surenamePerson' id='surenameId'/>
        <label htmlFor="heightId">Heigth</label>
        <input type="text" name='heightPerson' id='heightId'/>
        <label htmlFor="ageId">Age</label>
        <input type="text" name='agePerson' id='ageId'/>
        <label htmlFor="heighthId">Weigth</label>
        <input type="text" name='weightPerson' id='weightId'/>
        <button type='submit'>Submit</button>
      </form>

      <div>
        {personList.map(person => (
            <PersonCard key={person.getId()} person={person} onUpdate={handleUpdatePerson} />
        ))}
      </div>

    </>
  )
}

export default Practice36

type Props = {

  person: Person;
    onUpdate: (updatedPerson: Person) => void;
}

const PersonCard = (props: Props) => {

  
  return (
      <>
      </>
    
  )
}



