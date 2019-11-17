import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
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
					<MyComponent />
				</div>
			</Provider>
		)
	}
}

const MyComponent = () => {
  const dispatch = useDispatch()
  const count = useSelector(store => store.count)
  const increment = () => dispatch({ type: 'INCREMENT' })

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={increment}>Increase count using hooks</button>
    </div>
  )
}