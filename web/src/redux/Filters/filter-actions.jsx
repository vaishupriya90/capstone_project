import * as actionTypes from './filter-types';

export const sortByPrice = (sortType) => (dispatch) => {
  dispatch({
    type: actionTypes.SORT_BY_PRICE,
    payload: sortType,
  });
};

export const search = (searchValue) => (dispatch) => {
  dispatch({
    type: actionTypes.SEARCH,
    payload: searchValue,

  });
};
