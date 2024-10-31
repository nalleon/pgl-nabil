import React, { ChangeEvent, ReactEventHandler, useEffect, useRef, useState } from 'react'
import Person from './model/Person.ts';
import './Practice36.css'

const Practice36 = (props: Props) => {
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

type Props = {
    person : Person
}

const PersonCard = (props: Props) => {
  const [imc, setImc] = useState(0);
  
  function processForm(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();

    let form = e.currentTarget;

    const name = form.namePerson.value ?? "";
    const surname = form.surnamePerson.value ?? "";
    const height = form.heightPerson.value ?? 0;
    const age = form.agePerson.value ?? 0;
    const weigth = form.weightPerson.value ?? 0;

    const person = new Person();
    person.setName(name);
    person.setSurname(surname);
    person.setAge(age);
    person.setWeigth(weigth);
    person.setHeight(height);
    

    const imcValue = person.calculateIMC();
    person.setImc(imcValue);
    setImc(imcValue);
  }

  return (
      <>
        <div className='card'>
          <form onSubmit={processForm}>
            <div>
              <label htmlFor="nameId">Name</label>
            </div>
            <div>
              <input type="text" name='namePerson' id='nameId'/>
            </div>
            <div>
              <label htmlFor="surnameId">Surname</label>
            </div>
            <div>
              <input type="text" name='surnamePerson' id='surnameId'/>
            </div>
            <div>
            <label htmlFor="heightId">Heigth</label>
            </div>
            <div>
            <input type="text" name='heightPerson' id='heightId'/>
            </div>
            <div>
            <label htmlFor="ageId">Age</label>
            </div>
            <div>
            <input type="text" name='agePerson' id='ageId'/>
            </div>
            <div>
            <label htmlFor="heighthId">Weigth</label>
            </div>
            <div>
            <input type="text" name='weightPerson' id='weightId'/>
            </div>
            <div>
            <p>{imc}</p>
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </>
  )
}



