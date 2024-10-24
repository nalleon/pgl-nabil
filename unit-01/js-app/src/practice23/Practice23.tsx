import React, { ChangeEvent, useRef, useState } from 'react'

type Props = {}

const Practice23 = (props: Props) => {
    const refName = useRef<HTMLInputElement>({} as HTMLInputElement);
    const refSurename = useRef<HTMLInputElement>({} as HTMLInputElement);
    const [text, settext] = useState<string>('');
    const [counter, setCounter] = useState<number>(0);


    function handleChanges(event:ChangeEvent<HTMLInputElement>){
        event.preventDefault();
        let name = refName.current.value;
        let surename = refSurename.current.value;
        console.log(surename);

        let fullName = name + " " + surename;

        settext(fullName);
        setCounter(text.length)
    }



  return (
    <>
        <div className="main-container">
            <input type="text" name='userName' id='userName' placeholder='Insert your name' onChange={handleChanges} ref={refName}/>
            <input type="text" name="surenames" id='surenames' placeholder='Insert your surename(s)' onChange={handleChanges} ref={refSurename}/>
            <p>{text}: {counter} characters of length</p>

        </div>
    </>
    )
}

export default Practice23