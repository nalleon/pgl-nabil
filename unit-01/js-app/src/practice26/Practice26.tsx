import React, { useRef, useState } from 'react'
import Practice09 from '../practice09/Practice09.tsx';
import CountLetters from './CountLetters.tsx';
import './practice26.css';

type Props = {}

function Practice26({}: Props) {
    const inputValueRef = useRef<HTMLInputElement>({} as HTMLInputElement);
    const textareaRef = useRef<HTMLTextAreaElement>({} as HTMLTextAreaElement);

    const [option, setOption] = useState<boolean>(true);
    const [value, setValue] = useState<string>('');

    function getInputType(){
        let input = inputValueRef.current.value;
        setValue(input);

        if (isNaN(parseInt(input))) {
            setOption(true);
        } else {
            setOption(false);
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
             {option ? <CountLetters word={value}/> : <Practice09 numTable={parseInt(value)}/>}
             
        </div>

      
        </>
    )
}

export default Practice26

//  <textarea ref={textareaRef}> test</textarea>
//<button onClick={practicar}> practice</button>

