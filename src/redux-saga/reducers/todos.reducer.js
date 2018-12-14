const initialState = {
    todos: [],
    isLoading: false,
    error: null,
};

export default function todosReducer(state = initialState, action) {
    switch (action.type) {
      case 'GET_TODOS_BEGIN':
        return {
          ...state,
          isLoading: true,
        };
      case 'GET_TODOS_SUCCESS':
        return {
          ...state,
          isLoading: false,
          todos: action.payload,
        };
      case 'GET_TODOS_ERROR':
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        }
      default:
        return state;
    }
}