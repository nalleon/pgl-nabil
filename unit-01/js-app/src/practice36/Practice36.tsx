import React, { useState } from 'react'
import Person from './model/Person';

type Props = {}

const Practice36 = (props: Props) => {
  const [person, setPerson] = useState<Person[]>([]);


  const addPerson = () =>{
    const newPerson = new Person();
  }


  return (
    <div>Practice36</div>
  )
}

export default Practice36