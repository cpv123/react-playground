import React from 'react'
import AppPreHooks from './pre-hooks'
import AppWithHooks from './hooks'

function App() {
  return (
    <div>
      <AppPreHooks />
      <AppWithHooks />
    </div>
  )
}

export default App
