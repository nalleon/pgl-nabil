import React, { ChangeEvent, useState } from 'react'

type Props = {}

function Practica29({}: Props) {
    const [num, setnum] = useState<number>(1);
    

    function handleClick(event:React.MouseEvent<HTMLButtonElement>){
        event.preventDefault();
        
        if(event.currentTarget.innerText.includes("*")){
            setnum(num*2);
        } else if(event.currentTarget.innerText.includes("/")){
            setnum(num/2);
        }
        
    }

    return (
    <>
        <h5>Current num: {num} </h5>
        <button onClick={handleClick}>{num}*2</button>
        <button onClick={handleClick}>{num}/2</button>
        <br/>
    </>
    )
  }

export default Practica29