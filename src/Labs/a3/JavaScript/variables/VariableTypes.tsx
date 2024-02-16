import React from 'react'

function VariableTypes() {
  let numVar = 123;
  let floatPoint = 987.654;
  let booleanVariable = true;
  let stringVariable = "Mehul";
  let isNum = typeof numVar;
  let isString = typeof stringVariable;
  let isFloat = typeof floatPoint;
  let isBool = typeof booleanVariable;
  return (
    <div>
      <h2>Variable Types</h2>
      Number - {numVar} <br/>
      Float - {floatPoint} <br/>
      String - {stringVariable} <br/>
      booleanVariable - {booleanVariable + ""} <br/>
      isString - {isString}<br/>
      isNum - {isNum} <br/>
      isFloat - {isFloat} <br/>
      isBool - {isBool} <br/>
    </div>
  )
}

export default VariableTypes