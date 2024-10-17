import React, { useRef, useState } from 'react'
import Practice09 from '../practice09/Practice09';

type Props = {}

function Practice26({}: Props) {
    const inputValue = useRef<HTMLInputElement>({} as HTMLInputElement);
    const divResult = useRef<HTMLDivElement>({} as HTMLDivElement);
    const [result, setResult] = useState<boolean>(true);
    

    function getInputType(){
        let input = inputValue.current;
        let actualValue = input.value;

        switch (input.type) {
            case 'text':
                break;
        }

        //if del valor para saber el tipo
    }


  return (
        <>
        <div>
            <h4>Form</h4>
            <input type="text" ref={inputValue}/>
            <button onClick={getInputType}>Submit</button>

            {result ? <CountLetters/> : <Table/>}
        </div>

        </>
    )
}

export default Practice26



const CountLetters = (props: Props) =>{
    return (
        <>
        <p>Number of letters: {inputValue.current.value.length}</p>
        </>
    )
}

const Table = (props: Props) =>{
    return (
        <>
        </>
    )

}