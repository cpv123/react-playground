import React from 'react'

const AuthContext = React.createContext({})

class AuthProvider extends React.Component {
  state = {
    isAdmin: false,
  }

  updateIsAdmin = isAdmin => {
    this.setState({ isAdmin })
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAdmin: this.state.isAdmin,
          updateIsAdmin: this.updateIsAdmin,
        }}
        {...this.props}
      />
    )
  }
}

const connectAuth = (WrappedComponent, mapStateToProps = () => {}) => props => (
  <AuthContext.Consumer>
    {context => {
      if (!context) {
        throw new Error('Context does not exist')
      }
      return <WrappedComponent {...mapStateToProps(context)} {...props} />
    }}
  </AuthContext.Consumer>
)

export { AuthProvider, connectAuth }
