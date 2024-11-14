import React, { useEffect, useState } from 'react'
import Person from '../model/Person'


type Props = {
  person : Person
  modifyPersonParent : Function
}

/**
 * @author Nabil León Álvarez
 */

const PersonCard = (props: Props) => {
const { person } = props;

const [name, setname] = useState("");
const [surname, setsurname] = useState("");
const [height, setheight] = useState(0);
const [age, setage] = useState(0);
const [weight, setweight] = useState(0);

useEffect(() => {
    setname(person.name);
    setsurname(person.surname);
    setheight(person.height);
    setage(person.age);
    setweight(person.weight);
}, [person])


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
  person.setWeight(weigth);
  person.setHeight(height);
  

  const imcValue = person.calculateIMC();
  person.setImc(imcValue);

  props.modifyPersonParent(person);

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
            <input type="text" name='weightPerson' id='weightId' onChange={(e) => setweight(Number(e.target.value))} value={weight}/>
          </div>
          <div>
          </div>
          <button type='submit'>Process</button>
        </form>
      </div>
    </>
)
}


export default PersonCard