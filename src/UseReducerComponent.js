import React, { useReducer } from 'react'


const initialState = { name: "", last: '', birthYear: "" }

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.value };
    case "SET_LAST_NAME":
      return { ...state, lastName: action.value };
    case "SET_BIRTH_YEAR":
      return { ...state, birthYear: action.value };
    default:
      return state;
  }
}
function UseReducerComponent() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const handleInputChange = (e) => {
    const { name, value } = e.target 
    dispatch({ type: `SET_${name.toUpperCase()}`, value})
  }
  return (
    <div>
      <div>
        <label>Ім'я: </label>
        <input type="text" name="name" onChange={handleInputChange} />
        <button
          onClick={() => dispatch({ type: "SET_NAME", value: state.name })}
        >
          Ім'я
        </button>
      </div>
      <div>
        <label>Прізвище: </label>
        <input type="text" name="lastName" onChange={handleInputChange} />
        <button
          onClick={() =>
            dispatch({ type: "SET_LAST_NAME", value: state.lastName })
          }
        >
          Прізвище
        </button>
      </div>
      <div>
        <label>Рік народження: </label>
        <input type="text" name="birthYear" onChange={handleInputChange} />
        <button
          onClick={() =>
            dispatch({ type: "SET_BIRTH_YEAR", value: state.birthYear })
          }
        >
          Рік народження
        </button>
      </div>
      <div>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
}

export default UseReducerComponent