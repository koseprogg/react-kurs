import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div>
      <div>Count er: {count}</div>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
      <div style={{ margin: "10px" }}>
        <label>
          Name:
          <input
            type="text"
            onInput={(e) => setName(e.target.value)}
          />
        </label>
        <div>Hi, {name}!</div>
      </div>
    </div>
  );
};

export default Counter;
