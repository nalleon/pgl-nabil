import React, { useEffect, useState } from 'react'
import Person from '../model/Person';
import PersonCard from './PersonCard';

import "../styles/imc.css"

type Props = {}
/**
 * @author Nabil León Álvarez
 */
const ImcApp = (props: Props) => {
  const [personList, setPersonList] = useState<Person[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {

  // }, [personList])
  
  
  function addPerson (person: Person) : void {  
    setCurrentIndex(person.id);
    setPersonList([...personList, person]);
  };



  function changeCurrentIndex(person : Person){
    setCurrentIndex(person.id);
  }

  function modifyPerson (person : Person) : void {
    let arrAux = personList;
    arrAux[person.id-1] = person;
    setPersonList([...arrAux]);
  }

  return (
    <>
      <div className='main-container'>
      <h3>IMC Calculator</h3>
        <button onClick={() => addPerson(new Person(personList.length+1, "", "", 0, 0, 0))}>+</button>
        <div className='card-container'>
            <ul>
                {personList.map(person => (
                  <li className='list-item'>
                    <button onClick={() => changeCurrentIndex(person)}>{person.id}, {person.name ?? " "} {person.imc ?? " "}</button>
                  </li>
                ))}
            </ul>     
            
            { 
              (currentIndex !== 0) ?
              <PersonCard key={personList[currentIndex - 1].id} modifyPersonParent={modifyPerson} person={personList[currentIndex - 1]} />
              :
              <PersonCard key="0" modifyPersonParent={modifyPerson} person={new Person(0, "", "", 0, 0, 0)} />

            }     
        </div>
      </div>

    </>
  )
}

export default ImcApp