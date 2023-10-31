import React, { useState, useEffect } from 'react'

function UseEffectComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Компонент зрендерився")
  })
  const incrementCount = () => {
    setCount(count + 5)
  }
  return (

    <>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment</button>
    </>
  )
}

export default UseEffectComponent