import React from "react";

function FunctionParenthesisAndParameters() {
  const square = (a: number) => a * a;
  const plusOne = (a: number) => a + 1;
  const fourSquared = square(4);
  const fivePlusOne = plusOne(5);
  return (
    <div>
      <h2>Optional Parenthesis And Parameters</h2>
      4^2 = {fourSquared} <br/>
      square(4) = {square(4)}<br/>
      5+1 = {fivePlusOne}<br/>
      plusOne(5) = {plusOne(5)}<br/>
    </div>
  );
}

export default FunctionParenthesisAndParameters;
