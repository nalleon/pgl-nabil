import React from 'react'
import Watch from '../practice06/Watch';

type Props = {}

const practice16 = (props: Props) => {
    const array = ["London", "Madrid"];
  return (
    <>
        <div className='container'>
        {
            array.map( (zone,key)=>{
                
                return <div className='watch'><Watch key={key} zone={zone}/></div>
            })
        }
        </div>
    </>
    
  )
}

export default practice16