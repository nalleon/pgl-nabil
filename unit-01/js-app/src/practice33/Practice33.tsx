import React, { useState } from 'react'

type Props = {}

const Practice33 = (props: Props) => {
    const [primeNumArr, setprimeNumArr] = useState<Array<number>>([]);
    

    function processesPrimeNums(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        let form = e.currentTarget;

        const startNum = Number(form.startNum.value);
        const endNum = Number(form.endNum.value);


        setprimeNumArr([...calculatePrimeNums(startNum, endNum)]); 
    }


    function calculatePrimeNums(startNum: number, endNum: number) : number[]{
        let primeNumsArrAux: number[] = []; 
        
        for(let i = startNum; i <= endNum; i++){
            if(checkPrime(i)){
                primeNumsArrAux.push(i);
            }
        }

        return primeNumsArrAux;
    }

    function checkPrime(num : number) {
        for(let i = 0; i < num; i++){
            if (num % i === 0){
                return false;
            }
        }
        return true;
    }

  return (
    <>
        <form onSubmit={processesPrimeNums}>
            <div>
                <label htmlFor="startNum">Start Number:</label>
                <input type="number" id="startNum" name="startNum" />
            </div>

            <div>
                <label htmlFor="endNum">End Number:</label>
                <input type="number" id="endNum" name="endNum" />
            </div>

            <button type='submit'>Submit</button>
        </form>
        

        <div>
        <h3>Prime Numbers</h3>
            <ul>
                {primeNumArr.map((num) => {
                    if (num === primeNumArr[primeNumArr.length - 1]) {
                        return <li key={num}>{num}</li>;
                    }
                    return <li key={num}>{num},</li>;
                })}
            </ul>

        </div>
    </>

    )
}

export default Practice33