import { createStore, compose } from 'redux'

export const createBasicStore = reducer => {
  const createStoreWithMiddleware = compose(
	window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)(createStore)
  
  const store = createStoreWithMiddleware(reducer)

  return store
}
