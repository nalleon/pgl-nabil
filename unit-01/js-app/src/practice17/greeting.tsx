import React from 'react'

type Props = {
    date ?: string
}

function Greeting(props: Props) {
    const dateStr = props.date;
  return (
    <>
        <h1> Greetings! </h1>
        <p>Hello, today is {dateStr}</p>
    </>
  )
}

export default Greeting