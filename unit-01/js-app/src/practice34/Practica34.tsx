

import React, { useState } from 'react'


type Props = {}


const Practice34 = (props: Props) => {
    const [age, setAge] = useState<string[]>([]);

    function addDogAge(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        let form = e.currentTarget;
        let age = form.age.value;
        let sizeDog = form.sizeDog.value;

        let ageUpdate = 0;

        switch(sizeDog){
            case "Small":
                ageUpdate = age * 20;
                
                break;

            case "Medium":
                ageUpdate = age * 18;
                break;

            default:
                ageUpdate = age * 16;
                break;
        }
        let mensaje : string = " dog's age: " + age + ", human age: " + ageUpdate;
        setAge([...age, mensaje]);
    }

return (
    <>
    <p>{age}</p>
    <h2>Add dog's age</h2>
    <form onSubmit={addDogAge}>
        <input type="number" name="age" id="age" placeholder="Write your dog's age"/>
        <input type="radio" name="sizeDog" id="smallDog" value="Small"/>
        <label htmlFor="smallDog">Small</label>
        <input type="radio" name="sizeDog" id="mediumDog" value="Medium"/>
        <label htmlFor="mediumDog">Medium</label>
        <input type="radio" name="sizeDog" id="tipogrande" value="Big"/>
        <label htmlFor="bigDog">Big</label>
        <input type="submit" value="Add"/>
    </form>
    </>
)
}


export default Practice34


