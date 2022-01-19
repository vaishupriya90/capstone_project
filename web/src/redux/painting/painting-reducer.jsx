import * as actionTypes from './painting-types';

const initialState = {
  error: null,
  isLoading: false,
  paintings: [],
};

const paintingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PAINTINGS:
      return { ...state, isLoading: true, error: null };
    case actionTypes.GOT_PAINTINGS:
      return {
        ...state, paintings: action.payload, error: null, isLoading: false,
      };
    case actionTypes.GOT_PAINTINGS_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default paintingReducer;
