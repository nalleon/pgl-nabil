import React, { ChangeEvent, ReactEventHandler, useEffect, useRef, useState } from 'react'
import Person from './model/Person.ts';

const Practice36 = (props: Props) => {
  const [personList, setPersonList] = useState<Person[]>([]);

  function addPerson (person: Person) : void {
    setPersonList([...personList, person]);
  };

  return (
   
    <>
      <div>
        <button onClick={() => addPerson(new Person())}>+</button>

        {personList.map(person => (
            <PersonCard key={person.getId()} person={person} />
        ))}
      </div>

    </>
  )
}

export default Practice36

type Props = {
    addPerson: (person: Person) => void;
}

const PersonCard = (props: Props) => {
  const [personList, setPersonList] = useState<Person[]>([]);
  const [imc, setImc] = useState(0);
  
  function processForm(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();

    let form = e.currentTarget;

    const name = form.namePerson.value ?? "";
    const surname = form.surnamePerson.value ?? "";
    const height = form.heightPerson.value ?? 0;
    const age = form.agePerson.value ?? 0;
    const weigth = form.weightPerson.value ?? 0;
    const id = personList.length +1;

    const person = new Person();
    person.setId(id);
    person.setName(name);
    person.setSurname(surname);
    person.setAge(age);
    person.setWeigth(weigth);
    person.setHeight(height);
    

    const imcValue = person.calculateIMC();
    person.setImc(imcValue);
    setImc(imcValue);

    setPersonList([...personList, person]);
  }

  return (
      <>
        <div>
          <form onSubmit={processForm}>
            <label htmlFor="nameId">Name</label>
            <input type="text" name='namePerson' id='nameId'/>
            <label htmlFor="surnameId">surname</label>
            <input type="text" name='surnamePerson' id='surnameId'/>
            <label htmlFor="heightId">Heigth</label>
            <input type="text" name='heightPerson' id='heightId'/>
            <label htmlFor="ageId">Age</label>
            <input type="text" name='agePerson' id='ageId'/>
            <label htmlFor="heighthId">Weigth</label>
            <input type="text" name='weightPerson' id='weightId'/>
            <p>{imc}</p>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </>
  )
}



