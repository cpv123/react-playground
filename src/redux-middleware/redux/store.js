import thunk from 'redux-thunk'
import myMiddleware from './custom-middleware'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'

const createStoreWithMiddleware = compose(applyMiddleware(thunk, myMiddleware),
	window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);
  
const store = createStoreWithMiddleware(reducer);

export default store
