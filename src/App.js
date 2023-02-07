import React, { useState } from 'react';



const App = () => {
  // const state = useState()
  // console.log(state)

  const [count, setCount] = useState(0)


  const IncreametnNumber = () => {
    setCount(count + 1)
    // console.log('clicked')
  }

  const decreametnNumber = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <h1 id='h1'>{count}</h1>
      <button onClick={IncreametnNumber}>Click Me</button>
      <button onClick={decreametnNumber}>Click Me</button>
    </>
  );
}

export default App;
