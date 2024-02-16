import React from 'react'

function ArrowFunctions() {
  const subtract = (a:number , b :number) => {
    return a - b;
  }
  let fiveMinusTwo = subtract(5, 2);
  console.log(fiveMinusTwo);

  return (
    <div>
      <h2>Arrow Functions</h2>
      5-2 = {fiveMinusTwo} <br />
      subtract(5,2) = {subtract(5, 2)} <br />
    </div>
  );
}

export default ArrowFunctions