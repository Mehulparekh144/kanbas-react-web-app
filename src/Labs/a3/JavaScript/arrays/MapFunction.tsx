import React from 'react'

function MapFunction() {
  let numberArray1 =  [1,2,3,4,5,6];
  const square = (a:number) => a*a;
  const squares = numberArray1.map(square);
  const cubes = numberArray1.map((a:number)=>a*a*a)
  return (
    <div>
      <h2>Map</h2>
      numberArray1 = {numberArray1}<br/>
      squares = {squares}<br/>
      cubes = {cubes}<br/>

    </div>
  )
}

export default MapFunction