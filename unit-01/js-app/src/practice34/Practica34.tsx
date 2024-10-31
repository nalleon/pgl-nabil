

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
                for (let i = 1; i <= age; i++) {
                    if (i == 1) {
                        ageUpdate += 20;
                    } else if (i == 2) {
                        ageUpdate += 8;
                    } else {
                        ageUpdate += 4;
                    }
                }
                break;

            case "Medium":
                for (let i = 1; i <= age; i++) {
                    if (i == 1) {
                        ageUpdate += 18;
                    } else if (i == 2) {
                        ageUpdate += 9;
                    } else if (i > 10) {
                        ageUpdate +=5;
                    }else {
                        ageUpdate += 6;
                    }
                }
                break;

            default:
                for (let i = 1; i <= age; i++) {
                    if (i == 1) {
                        ageUpdate += 16;
                    } else if (i == 2) {
                        ageUpdate += 6;
                    } else if (i>10){
                        ageUpdate += 11;
                    } else {
                        ageUpdate += 9;
                    }
                } 
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


