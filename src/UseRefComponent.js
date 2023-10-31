import React, { useRef } from 'react'

function UseRefComponent() {
  const inputRef = useRef(null)

  const focusInput = () => {
    inputRef.current.focus()
  }
  const blurInput = () => {
    inputRef.current.blur()
  }
  return (
    <div>
      <input type='text' ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
      <button onClick={blurInput}>Blur</button>
    </div>
  )
}

export default UseRefComponent