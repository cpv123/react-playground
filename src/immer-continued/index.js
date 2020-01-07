import React from 'react'
import { Provider } from 'react-redux'
import MyConnectedComponent from './Component'
import store from './reducer'

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

