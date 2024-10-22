import React, { ChangeEvent } from 'react'
import {useState} from 'react';

type Props = {}

const Practice28 = (props: Props) => {
  const [text, setText] = useState<String>("");
  

  function handleChanges(event:ChangeEvent<HTMLInputElement>){
    event.preventDefault();
    setText(event.target.value);
  }

    return (
    <>
        <label htmlFor="name"></label>
        <input type="text" id="name" onChange={handleChanges}/>
        <br/>
        <h5>You wrote: {text} </h5>
    </>
  )
}

export default Practice28