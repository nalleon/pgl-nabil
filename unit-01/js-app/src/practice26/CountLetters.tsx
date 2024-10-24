import React, { useEffect, useState } from 'react'

type Props = {
    word : string
}

const CountLetters = (props: Props) => {
    const word = props.word;

  return (
    <>
        <div>
            <h4>{word} length is: {word.length}</h4>
        </div>
    </>
  )
}

export default CountLetters