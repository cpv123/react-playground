import { fromJS } from 'immutable';
import actionTypes from './actionTypes';

// An immutable initial state.
const initialState = fromJS({
    favourites: {
        color: {
            light: '',
            dark: '',
        },
    },
    listOfColors: ['blue', 'green', 'yellow', 'red'],
    randomColor: 'green',
});

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_FAVOURITE_LIGHT_COLOR:
            return state.setIn(['favourites', 'color', 'light'], action.payload);

        case actionTypes.UPDATE_FAVOURITE_DARK_COLOR:
            return state.setIn(['favourites', 'color', 'dark'], action.payload);
        
        case actionTypes.ADD_COLOR_TO_LIST:
            const listWithNewColor = state.get('listOfColors').push(action.payload);
            return state.set('listOfColors', listWithNewColor);

        case actionTypes.REMOVE_COLOR_FROM_LIST:
            const existingList = state.get('listOfColors');
            const listWithRemovedColor = existingList.delete(Math.floor(Math.random() * existingList.size - 1))
            return state.set('listOfColors', listWithRemovedColor);

        case actionTypes.UPDATE_RANDOM_COLOR:
            return state.set('randomColor', action.payload);

        default:
            return state;
    }
}

export default reducer;
