// import axios from 'axios';
import * as actionTypes from './cart-types';

export const addToCart = (painting, qty) => (dispatch) => {
  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      painting,
      qty,
    },
  });
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: { id },
  });
};

export const changeQuantity = (painting, qty) => (dispatch) => {
  dispatch({
    type: actionTypes.CHANGE_QUANTITY,
    payload: {
      id: painting.id,
      qty,
    },
  });
};
