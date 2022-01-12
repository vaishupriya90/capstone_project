/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import * as actionTypes from './cart-types';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case actionTypes.REMOVE_FROM_CART:
      // eslint-disable-next-line max-len
      return { ...state, cartItems: state.cartItems.filter((c) => c.painting.id !== action.payload.id) };
    case actionTypes.CHANGE_QUANTITY:
      // eslint-disable-next-line max-len
      return { ...state, cartItems: state.cartItems.filter((c) => (c.painting.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty)) };
    default:
      return state;
  }
};

export default cartReducer;
