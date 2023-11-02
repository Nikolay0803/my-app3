import React, { useReducer } from "react";

const initialState = { name: "", lastName: "", birthYear: "" };

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
};

function UseReducerComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleButtonClick = (type) => {
    dispatch({ type, value: state[type] });
  };

  return (
    <div>
      <div>
        <label>Ім'я: </label>
        <input
          type="text"
          name="name"
          onChange={(e) =>
            dispatch({ type: "SET_NAME", value: e.target.value })
          }
        />
        <button onClick={() => handleButtonClick("name")}>Ім'я</button>
      </div>
      <div>
        <label>Прізвище: </label>
        <input
          type="text"
          name="lastName"
          onChange={(e) =>
            dispatch({ type: "SET_LAST_NAME", value: e.target.value })
          }
        />
        <button onClick={() => handleButtonClick("lastName")}>Прізвище</button>
      </div>
      <div>
        <label>Рік народження: </label>
        <input
          type="text"
          name="birthYear"
          onChange={(e) =>
            dispatch({ type: "SET_BIRTH_YEAR", value: e.target.value })
          }
        />
        <button onClick={() => handleButtonClick("birthYear")}>
          Рік народження
        </button>
      </div>
      <div>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
}

export default UseReducerComponent;
