const initialState = {
  basket: {
    items: [],
    price: null,
  }
}

const actionHandlers = {
  'FIRST': (state) => ({
    ...state
  }) 
}

const reducer = (state = initialState, action)=> (
	actionHandlers[action.type] ? 
		actionHandlers[action.type](state, action)
		: state
)

export default reducer
