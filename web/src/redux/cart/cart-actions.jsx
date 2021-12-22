// import axios from 'axios';
import * as actionTypes from './cart-types';

export const addToCart = (id, qty) => async (dispatch) => {
  // const { data } = await axios.get(`${process.env.REACT_APP_BASE_API}/api/paintings/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: id,
      qty,
    },
  });

  // localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  // localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};
