import React from 'react'
import { connect, Provider } from 'react-redux'
import store from './store'

export default class Main extends React.Component {
	constructor(props) {
		super(props)
		this.store = store
	}
    
	render() {
		return (
			<Provider store={this.store}>
				<MyConnectedComponent />
			</Provider>
		)
	}
} 

const MyComponent = () => {
  return (
    null
  )
}

const MyConnectedComponent = connect()(MyComponent)
