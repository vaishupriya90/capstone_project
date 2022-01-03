import * as actionTypes from './filter-types';

export const sortByPice = (sortType) => (dispatch) => {
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
