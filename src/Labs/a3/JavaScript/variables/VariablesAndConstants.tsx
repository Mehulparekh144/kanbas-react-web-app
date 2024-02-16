import React from 'react'

function VariablesAndConstants() {
  var varVariable = 5; // FunctionScoped
  let letVariable = 3; // Blockscoped
  const constVariable = varVariable - letVariable;
  return (
    <div>
      <h2>Variables and Constants</h2>
      functionScoped - {varVariable} <br/>
      blockScoped - {letVariable}<br/>
      constant - {constVariable}<br/>
    </div>
  )
}

export default VariablesAndConstants