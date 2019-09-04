import React, { useState } from 'react'
import { getExampleNumber, isValidNumber } from 'libphonenumber-js'
import examples from 'libphonenumber-js/examples.mobile.json'

function ExampleNumber() {
  const [exampleNumber, setExampleNumber] = useState(null)
  const [testNumber, setTestNumber] = useState('')
  const [testNumberIsValid, setTestNumberIsValid] = useState(false)

  const generateExampleNumber = () => {
    const exampleNumber = getExampleNumber('GB', examples).number
    setExampleNumber(exampleNumber)
  }

  const testNumberFn = () => {
    const isValid = isValidNumber(testNumber)
    setTestNumberIsValid(isValid)
  }

  return (
    <div>
      <p>Example number is: {exampleNumber}</p>
      <button onClick={generateExampleNumber}>Generate number</button>
      <div style={{ marginTop: 20 }}>
        <input
          onChange={e => setTestNumber(e.target.value)}
          placehlder='Enter number to check'
        />
        <button onClick={testNumberFn}>Check if valid</button>
        <p>Is valid: {JSON.stringify(testNumberIsValid)}</p>
      </div>
    </div>
  )
}

export default ExampleNumber
