import React from 'react'

function FindIndex() {
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ["string1", "string2", "string3"];
  const four = numberArray1.findIndex((a) => a === 4);
  const string3 = stringArray1.findIndex((a) => a === "string3");
  const string4 = stringArray1.findIndex((a) => a === "string4");
  return (
    <div>
      <h2>Find Index function</h2>
      four = {four} <br />
      string3 = {string3} <br />
      string4 = {string4} <br />
    </div>
  );
}

export default FindIndex