import React, { useState } from "react";

function UseStateComponent() {
  const names = ["Vika", "Nika", "Anna", "Rita", "Ira"];
  const [greeting, setGreeting] = useState("");

  const generateRandomGreeting = () => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    setGreeting(`Hello ${randomName}`);
  };

  return (
    <div>
      <button onClick={generateRandomGreeting}>Generate Greeting</button>
      {greeting && <p>{greeting}</p>}
    </div>
  );
}

export default UseStateComponent;
