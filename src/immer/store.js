import { createStore, compose } from 'redux'
import { reducer } from './reducer'

const createStoreWithMiddleware = compose(
	window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)(createStore)
  
const store = createStoreWithMiddleware(reducer)

export default store
