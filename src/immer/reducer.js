import produce from 'immer'

const initialState = {
  basket: {
    items: [],
    price: {
      total: null,
      discountApplied: null,
    },
  }
}

const actionHandlers = {
  'ADD_TO_BASKET': (state, action) => {
    return produce(state, draft => {
      draft.basket.items.push(action.item)
    })
  },
  'APPLY_DISCOUNT': (state, action) => {
    return produce(state, draft => { 
      draft.basket.price.discountApplied = draft.basket.price.discountApplied + action.discount
    })
  }
}

const reducer = (state = initialState, action)=> (
	actionHandlers[action.type] ? 
		actionHandlers[action.type](state, action)
		: state
)

export default reducer
