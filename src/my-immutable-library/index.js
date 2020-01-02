import React from 'react'
import { connect, Provider } from 'react-redux'
import { createStore } from 'redux'
import { createNewState, immu } from './immu'

const MyReducer = (state = immu({ count: 0 }), action) => {
	if (action.type === 'INCREMENT') {
		return createNewState(state, state => state.count = state.count + 1)
  }
  
  // Won't work
  if (action.type === 'DECREMENT') {
    const newState = state.count =- 1
    return newState
  }

	return state
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

const MyComponent = ({ count, increment, decrement }) => (
	<div>
		<div>Count: {count}</div>
		<button onClick={increment}>Increase count</button>
    <button onClick={decrement}>Decrease count</button>
	</div>
)

const mapStateToProps = ({ count }) => ({ count })
const increment = () => ({
	type: 'INCREMENT',
})
const decrement = () => ({
  type: 'DECREMENT',
})

const MyConnectedComponent = connect(mapStateToProps, { increment, decrement })(MyComponent)
