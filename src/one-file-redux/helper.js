import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

export const createAppWithStore = (reducer) => {
  const store = createStore(reducer)

  class App extends React.Component {
    constructor(props) {
      super(props)
      this.store = store
    }

    render() {
      return (
        <Provider store={store}>
          {...this.props.children}
        </Provider>
      )
    }
  }

  return App 
}