import React, { ChangeEvent, useState } from 'react'


const Practice39 = (props: Props) => {
    const [data, setdata] = useState("")

    function getData(dataInput : string){
        setdata(dataInput);
    }
    return (
        <>
            <p>Component A</p>
            <InputToUpper onNewText={getData}/>
            <p>
                Data: {data}
            </p>
        </>
    )
}

export default Practice39


type Props = {
    onNewText: Function ;
}


const InputToUpper = (props: Props) => {

    return (
        <>
            <input type="text" onChange={(e) => props.onNewText(e.target.value.toUpperCase())}/>
        </>
    )
 
}