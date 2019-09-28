import React from 'react'
import { AuthProvider, connectAuth } from './auth-context'

export default function App() {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  )
}

function Main() {
  return <AuthConnectedChild />
}

function Child({ isAdmin, updateIsAdmin }) {
  return (
    <div>
      <p>Is user admin: {JSON.stringify(isAdmin)}</p>
      <button onClick={() => updateIsAdmin(!isAdmin)}>
        Click to toggle admin
      </button>
    </div>
  )
}

const mapAuthStateToProps = ({ isAdmin, updateIsAdmin }) => ({
  isAdmin,
  updateIsAdmin,
})

const AuthConnectedChild = connectAuth(Child, mapAuthStateToProps)
