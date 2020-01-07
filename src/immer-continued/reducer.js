import produce from 'immer'
import { createStore } from 'redux'

const initialState = {
  todos: {
    'a': { id: 'a', isComplete: false },
    'b': { id: 'b', isComplete: false },
  }
}

const MyReducer = (state = initialState, action) => {
  if (action.type === 'TOGGLE_COMPLETE') {
    return produce(state, draft => {
      draft.todos[action.todoId].isComplete = action.payload
    })
  } else {
    return state
  }
}

export default createStore(MyReducer)