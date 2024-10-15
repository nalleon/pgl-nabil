import React, { useEffect, useState } from 'react'

type Props = {}

const Practice18 = (props: Props) => {
    const [count, setCount] = useState<number>(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
      }, [count]);

  return (
    <>
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    </>
  )
}


export default Practice18