import React from "react";

function ImpliedReturn() {
  const multiply = (a: number, b: number) => a * b;
  const fiveTimesFour = multiply(5,4);
  console.log(fiveTimesFour)
  return <div>
    <h2>Implied Return</h2>
    5*4 = {fiveTimesFour}<br/>
    multiply(5,4) = {multiply(5,4)}
  </div>;
}

export default ImpliedReturn;
