import React from 'react'
import { connect, Provider } from 'react-redux'
import { createStore } from 'redux'

const MyReducer = (state = { count: 0 }, action) => {
	if (action.type === 'INCREMENT') {
		return {
			...state,
			count: state.count + 1
		}
	}
	return { ...state }
}
const MyReduxStore = createStore(MyReducer)

export default class Main extends React.Component {
	constructor(props) {
		super(props)
		this.store = MyReduxStore
	}
    
	render() {
		return (
			<Provider store={this.store}>
				<div>
					<MyConnectedComponent />
				</div>
			</Provider>
		)
	}
}

const MyComponent = ({ count, increment }) => (
	<div>
		<div>Count: {count}</div>
		<button onClick={increment}>Increase count</button>
	</div>
)

const mapStateToProps = ({ count }) => ({ count })
const increment = () => ({
	type: 'INCREMENT',
})

const MyConnectedComponent = connect(mapStateToProps, { increment })(MyComponent)
