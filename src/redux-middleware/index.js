import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Child from './Child'

class MiddlewareComponent extends React.Component {
	constructor(props) {
		super(props)
		this.store = store
	}
    
	render() {
		return (
			<Provider store={this.store}>
				<Child />
			</Provider>
		)
	}
}

export default MiddlewareComponent
