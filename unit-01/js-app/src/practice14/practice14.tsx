import React from 'react'
import  Practice09  from '../practice09/Practice09.tsx';
import './practice14.css'
type Props = {}

const practice14 = (props: Props) => {
    const arr = [2,3,4,5,6,7,8,9,10];

    return (
    <div className='grid-tables'>
        {
            arr.map(num => {
                if(num % 2 ===1){
                    return <div className='table-even'><Practice09 key={num} numTable={num}/></div>
                }
            }      
        )}
    </div> 

  )
}

export default practice14