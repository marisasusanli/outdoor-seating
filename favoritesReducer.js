import { combineReducers } from 'redux';

export const addFavorite = (newFavorite) => {
  return {
    type: 'ADD_FAVORITE',
    newFavorite,
  };
};

export const removeFavorite = (place) => {
  return {
    type: 'REMOVE_FAVORITE',
    place,
  };
};

const initialState = [];

const favsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      const duplicate = [...state].find(
        (elem) => elem.id === action.newFavorite.id
      );
      if (duplicate) return [...state];
      else return [...state, action.newFavorite];
    case 'REMOVE_FAVORITE':
      return [...state].filter((elem) => elem.id !== action.place.id);
    default:
      return state;
  }
};

export default combineReducers({
  favorites: favsReducer,
});
