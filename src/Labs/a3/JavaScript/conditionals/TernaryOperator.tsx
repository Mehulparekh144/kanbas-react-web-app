import React from 'react'

function TernaryOperator() {
  let isLogged = true;
  return (
    <div>
      <h2>Ternary Operator</h2>
      <h4>Logged in </h4>
      {
        isLogged ? <p>Welcome</p> : <p>Please Log in</p>
      }
    </div>
  );
}

export default TernaryOperator