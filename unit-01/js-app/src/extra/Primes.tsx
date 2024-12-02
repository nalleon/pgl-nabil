import React, { useEffect, useState } from 'react'


type Props = {}

function Primes({}: Props) {

    useEffect(() => {
        calculatePrimes(1, 1000000000);
    }, [])
    

    function isPrime(num: number): boolean {
        if (num < 2){
            return false;
        }  
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    function calculatePrimes(start : number, end : number): void {

        const primes: number[] = [];

        for (let i = start; i <= end; i++) {
            if (isPrime(i)) {
                primes.push(i); 
                console.log(i);
            }
        }
    }

    return (
        <>
            <h2>Test</h2>
        </>
        
    )
}

export default Primes