import React, { useState } from 'react'
import { getExampleNumber, isValidNumber } from 'libphonenumber-js'
import examples from 'libphonenumber-js/examples.mobile.json'

function ExampleNumber() {
  const [exampleNumber, setExampleNumber] = useState(null)
  const generateExampleNumber = () => {
    const exampleNumber = getExampleNumber('GB', examples).number
    setExampleNumber(exampleNumber)
    console.log(isValidNumber(exampleNumber))
  }

  return (
    <div>
      <p>Example number is: {exampleNumber}</p>
      <button onClick={generateExampleNumber}>Generate number</button>
    </div>
  )
}

export default ExampleNumber
