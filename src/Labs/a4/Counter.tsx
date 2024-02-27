import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Integer State Variables</h2>
      <h3>Counter : {count}</h3>
      <button
        className="btn btn-success  me-2"
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        Increase Count
      </button>
      <button
        className="btn btn-danger me-2"
        onClick={() => {
          setCount(count - 1);
          console.log(count);
        }}
      >
        Decrease Count
      </button>
    </div>
  );
}

export default Counter;
