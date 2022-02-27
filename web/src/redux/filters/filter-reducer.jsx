import * as actionTypes from './filter-types';

const initialState = {
  sort: null,
  searchValue: '',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SORT_BY_PRICE:
      return { ...state, sort: action.payload };
    case actionTypes.SEARCH:
      return { ...state, searchValue: action.payload };
    default:
      return state;
  }
};

export default filterReducer;
