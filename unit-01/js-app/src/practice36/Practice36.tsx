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
  const { person } = props;
  
  
  function processForm(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();

    let form = e.currentTarget;

    const name = form.namePerson.value ?? "";
    const surname = form.surnamePerson.value ?? "";
    const height = form.heightPerson.value ?? 0;
    const age = form.agePerson.value ?? 0;
    const weigth = form.weightPerson.value ?? 0;

    person.setName(name);
    person.setSurname(surname);
    person.setAge(age);
    person.setWeigth(weigth);
    person.setHeight(height);
    
    const imcValue = person.calculateIMC();
    console.log(imcValue);
    person.setImc(imcValue);
  }

  return (
      <>
        <div className='card'>
          <form onSubmit={processForm}>
            <div>
              <p>{person.id}</p>
            </div>
            <div>
              <label htmlFor="nameId">Name</label>
            </div>
            <div>
              <input type="text" name='namePerson' id='nameId' value={person.name}/>
            </div>
            <div>
              <label htmlFor="surnameId">Surname</label>
            </div>
            <div>
              <input type="text" name='surnamePerson' id='surnameId' value={person.surname}/>
            </div>
            <div>
            <label htmlFor="heightId">Heigth</label>
            </div>
            <div>
            <input type="text" name='heightPerson' id='heightId' value={person.height}/>
            </div>
            <div>
            <label htmlFor="ageId">Age</label>
            </div>
            <div>
            <input type="text" name='agePerson' id='ageId' value={person.age}/>
            </div>
            <div>
            <label htmlFor="heighthId">Weigth</label>
            </div>
            <div>
            <input type="text" name='weightPerson' id='weightId' value={person.weigth}/>
            </div>
            <div>
            <p>{person.imc}</p>
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </>
  )
}



