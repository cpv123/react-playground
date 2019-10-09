import React, { useEffect } from 'react'
import { connect, Provider } from 'react-redux'
import { createStore, compose } from 'redux'

const actions = [
  'LETS',
  'MAKE',
  'SOME',
  'MAP_STATE_TO_PROPS',
  'RUN 🏃‍♂️',
  'AND',
  'RUN 🏃‍♀️',
  'AND',
  'RUN 🏃‍♂️',
  'AND',
  'RUN 🏃‍♀️',
  'AND',
  'RUN 🏃‍♂️',
]

const reducer = (state = { count: 0 }, action) => {
  if (action.type === 'UNKNOWN') {
    return { ...state }
  }
  return {
    ...state,
    count: action.payload,
  }
}

const createStoreWithMiddleware = compose(
	window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)(createStore)
  
const store = createStoreWithMiddleware(reducer)

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

const timer = ms => new Promise(r => setTimeout(r, ms)) 

const MyComponent = ({ dispatch, count }) => {
  useEffect(() => {
    const loopThroughActions = async () => {
      for (let i = 0; i < actions.length; i++) {
        await timer(500)
        dispatch({ type: actions[i], payload: i })
      }
    }
    loopThroughActions()
  }, [])

  const actionThatDoesNotUpdateState = () => {
    dispatch({
      type: 'UNKNOWN'
    })
  }

  console.log('Going to re-render')

  return (
    <div>
      <p>{count}</p>
      <button 
        onClick={() => actionThatDoesNotUpdateState()}
      >
        Action that does not update state
      </button>
    </div>
  )
}

const mapStateToProps = state => ({
  count: state.count,
  authentication: { isAuthenticated: true },
})

const MyConnectedComponent = connect(mapStateToProps)(MyComponent)
