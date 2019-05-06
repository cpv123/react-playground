import actionTypes from './actionTypes';

const updateFavouriteLightColor = (color) => ({
    type: actionTypes.UPDATE_FAVOURITE_LIGHT_COLOR,
    payload: color,
});

const updateFavouriteDarkColor = (color) => ({
    type: actionTypes.UPDATE_FAVOURITE_DARK_COLOR,
    payload: color,
});

const addColorToList = (color) => ({
    type: actionTypes.ADD_COLOR_TO_LIST,
    payload: color,
});

const updateRandomColor = (color) => ({
    type: actionTypes.UPDATE_RANDOM_COLOR,
    payload: color,
});

export {
    updateFavouriteLightColor,
    updateFavouriteDarkColor,
    addColorToList,
    updateRandomColor,
}