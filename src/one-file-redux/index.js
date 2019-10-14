import React from 'react'
import { connect, Provider } from 'react-redux'
import { createStore } from 'redux'

const reducer = (state = { count: 0 }, action) => state
const store = createStore(reducer)

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

const MyComponent = () => <div />

const mapStateToProps = ({ count }) => ({ count })

const MyConnectedComponent = connect(mapStateToProps)(MyComponent)
