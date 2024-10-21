import React, { useRef, useState } from 'react'
import Practice09 from '../practice09/Practice09';

type Props = {}

function Practice26({}: Props) {
    const inputValueRef = useRef<HTMLInputElement>({} as HTMLInputElement);
    const textareaRef = useRef<HTMLTextAreaElement>({} as HTMLTextAreaElement);

    const [option, setOption] = useState<boolean>(true);
    const [value, setValue] = useState<String>('');

    function getInputType(){
        let input = inputValueRef.current.value;
        //alert(input);

        switch (input) {
            case 'text':
                setOption(true);
                break;
            default:
                setOption(false);
                break;
        }

    }

    function practicar(){
        let rndNum = Math.random()*100;
        textareaRef.current.value += ""+rndNum;
    }


  return (
        <>
        <div>
            <h4>Form</h4>
            <input type="text" ref={inputValueRef}/>
            <button onClick={getInputType}>Submit</button>

            
        </div>

        <textarea ref={textareaRef}> test</textarea>
        <button onClick={practicar}> practice</button>
        </>
    )
}

export default Practice26



const CountLetters = (props: Props) =>{


    return (
        <>
        <p>Number of letters: {}</p>
        </>
    )
}

const Table = (props: Props) =>{
    const num = [1, 2, 3, 4, 5, 6, 7,8, 9, 10]
    return (
        <>
        </>
    )

}
// {resultNum ? <CountLetters num={}/> : <Table/>}