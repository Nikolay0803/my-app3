import { useEffect, useReducer, useRef, useState } from "react";
import "./App.css";
import UnmountComponent from "./UnmountComponent";
import UseEffectComponent from "./UseEffectComponent";
import UseLayoutEffectComponent from "./UseLayoutEffectComponent";
import UseStateComponent from "./UseStateComponent";
import UseReducerComponent from "./UseReducerComponent";
import UseRefComponent from "./UseRefComponent";

function App() {
  const inputRef = useRef();
  const handleFocus = () => {
    inputRef.current.focus()
    console.log(inputRef.current.value)
} 
  return (
    <div className="App">
      <header className="App-header">
        {/* <input ref={inputRef} />
        <p>text</p>
        <button onClick={handleFocus}>Focus me</button> */}
        <UseRefComponent />
        <UseReducerComponent />
        <UseStateComponent />
        <UseLayoutEffectComponent />
        <UseEffectComponent />
      </header>
    </div>
  );
}

export default App;
