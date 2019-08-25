const initialState = {
	isLoading: false,
	data: [],
	isError: false,
}

const actionHandlers = {
  'GET_DATA_START': (state) => ({
		...state,
		isLoading: true,
	}),
	'GET_DATA_RECEIVE': (state, action) => ({
		...state,
		isLoading: false,
		data: action.payload,
	}),
	'GET_DATA_ERROR': (state) => ({
		...state,
		isLoading: false,
		isError: true,
	}),
	'GET_MORE_DATA_START': (state) => ({
		...state,
		isLoading: true,
	}),
	'GET_MORE_DATA_RECEIVE': (state, action) => ({
		...state,
		isLoading: false,
		data: action.payload,
	}),
	'GET_MORE_DATA_ERROR': (state) => ({
		...state,
		isLoading: false,
		isError: true,
	}),
}

const reducer = (state = initialState, action)=> (
	actionHandlers[action.type] ? 
		actionHandlers[action.type](state, action)
		: state
)

export default reducer
