import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './redux-saga/reducers';
import todosSaga from './redux-saga/sagas/todos.saga';

const composeEnhancers = (process.env.NODE_ENV === 'production') ? 
   compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(todosSaga);

export default store;