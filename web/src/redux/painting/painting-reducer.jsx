import * as actionTypes from './painting-types';

const initialState = {
  getError: null,
  loaded: false,
  paintings: [],
};

const paintingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PAINTINGS:
      return { ...state, loaded: false, getError: null };
    case actionTypes.GOT_PAINTINGS:
      return {
        ...state, paintings: action.payload, getError: null, loaded: true,
      };
    case actionTypes.GET_ERRORS:
      return { ...state, getError: action.payload, loaded: true };
    default:
      return state;
  }
};

export default paintingReducer;
