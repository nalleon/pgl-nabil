import React, { useState } from 'react'
import Practice10 from '../practice10/Practice10.tsx'
import Greeting from './greeting.tsx';



type Props = {}

const Practice17 = (props: Props) => {
    const [showRndNum, setRndNum] = useState(true);

    return (
    <>
        {showRndNum? <RndNumberComponent/> : <GreetingComponent/>}
        <button onClick={()=> setRndNum(true)}>RndNum</button>
        <button onClick={()=>setRndNum(false)}>Greeting</button>
    </>
    
  )
}


const RndNumberComponent = (props: Props) =>{
    return (
        <>
            <Practice10/>
        </>
    )
}


const GreetingComponent = (props: Props) =>{
    return (
        <>
            <Greeting/>
        </>
    )
}


export default Practice17