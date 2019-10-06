import React from 'react'
import { connect, Provider } from 'react-redux'
import reducer from './reducer'
import { createBasicStore } from '../utils'

const store = createBasicStore(reducer)

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
