import axios from 'axios';
import * as actionTypes from './shopping-types';

export const addToCart = (itemId) => ({
  type: actionTypes.ADD_TO_CART,
  payload: {
    id: itemId,
  },
});

export const getPaintings = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PAINTINGS });

    const { data } = await axios.get(`${process.env.REACT_APP_BASE_API}/api/paintings`);

    dispatch({
      type: actionTypes.GOT_PAINTINGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.GET_ERRORS,
      payload: { err },
    });
  }
};
