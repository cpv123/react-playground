import React, { useState } from 'react'

export const AuthContext = React.createContext({})

function AuthProvider(props) {
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <AuthContext.Provider
      value={{
        isAdmin,
        updateIsAdmin: setIsAdmin,
      }}
      {...props}
    />
  )
}

export { AuthProvider }