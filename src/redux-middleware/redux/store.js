import thunk from 'redux-thunk'
import { myMiddleware } from './custom-middleware'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'

const createStoreWithMiddleware = compose(applyMiddleware(thunk, myMiddleware),
	window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)(createStore);
  
const store = createStoreWithMiddleware(reducer);

export default store
