import React, { useContext } from 'react'
import { AuthContext, AuthProvider } from './auth-context'

export default function App() {
  return (
    <AuthProvider>
      <h2>With hooks</h2>
      <Main />
    </AuthProvider>
  )
}

function Main() {
  return <Child />
}

function Child() {
  const { isAdmin, updateIsAdmin } = useContext(AuthContext)
  return (
    <div>
      <p>Is user admin: {JSON.stringify(isAdmin)}</p>
      <button onClick={() => updateIsAdmin(!isAdmin)}>
        Click to toggle admin
      </button>
    </div>
  )
}
