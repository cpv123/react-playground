import React from 'react'

const AuthContext = React.createContext({})

class AuthProvider extends React.Component {
  /**
   * Note that we put the update function in state so that we can pass
   * a 'value' to the Provider that won't change all the time.
   */
  state = {
    isAdmin: false,
    updateIsAdmin: this.updateIsAdmin,
  }

  updateIsAdmin = isAdmin => {
    this.setState({ isAdmin })
  }

  render() {
    return (
      <AuthContext.Provider value={this.state} {...this.props} />
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
