import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions/todos.actions';

async function getApi(url) {
    const data = await axios.get(url);
    return data;
}
// Worker saga: make async request to get todos
export function* getTodos() {
  try {
    const data = yield call(getApi, 'http://localhost:8000/api/todos?query=sorted');
    yield put(actions.getTodosSuccess(data));
  } catch (e) {
    yield put(actions.getTodosError(e));
  }
}

// Watcher saga: spawn a new getTodos task on each GET_TODOS_BEGIN
function* todosSaga() {
  yield takeEvery('GET_TODOS_BEGIN', getTodos);
}

export default todosSaga;
