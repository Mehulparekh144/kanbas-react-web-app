import React from 'react'

function ES5Functions() {
  function add (a : number , b :number){
    return a + b;
  }
  let fivePlusTwo = add(5,2);
  console.log(fivePlusTwo);
  
  return (
    <div>
      <h2>Legacy ES5Functions</h2>
      5+2 = {fivePlusTwo} <br/>
      add(5,2) = {add(5,2)} <br/>
    </div>
  )
}

export default ES5Functions