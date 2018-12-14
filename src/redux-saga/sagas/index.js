import todosSaga from './todos.saga';

export default function* rootSaga() {
  yield [
    todosSaga(),
  ];
}
