import React, { ChangeEvent, useEffect, useState } from 'react'


const Practice35Refactor = (props: Props) => {
    const [message, setMessage] = useState("");

    function sendInfoChild(data: string){
        setMessage(data);
    }
  
    return (
      <div>
        <h2>Message: {message}</h2>
        <ComponentA sendMessage={sendInfoChild}  />
        <ComponentB sendMessage={sendInfoChild}/> 
      </div>
    );
}

export default Practice35Refactor


type Props = {

  sendMessage: Function

}

const ComponentA = (props: Props) => {

    function send(e:React.FormEvent<HTMLFormElement>){
      e.preventDefault();
      let form = e.currentTarget;
      const {sendMessage} = props;
      let message = form.textA.value;
      sendMessage(message);
    }
    
    return (
    <>
      <h1>Component A</h1>
      <form onSubmit={send}>
        <input type='text' name='textA'></input>
        <button type='submit'>Send</button>
      </form>
    </>
  )
}


const ComponentB = (props: Props) => {
    
  function send(){
    const {sendMessage} = props;
    let message = "Notified from component B"
    sendMessage(message);
  }
  
  return (
  <>
    <h1>Component B</h1>
    <button onClick={send}>Notified from component B</button>
  </>
)
  }