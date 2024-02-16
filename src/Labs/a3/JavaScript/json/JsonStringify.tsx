import React from 'react'

function JsonStringify() {
  const squares = [1,4,9,16,25];
  return (
    <div>
      <h2>JSON Stringify</h2>
      squares = {JSON.stringify(squares)}
    </div>
  )
}

export default JsonStringify