import { createAction, createSlice } from '@reduxjs/toolkit';

export const addToCart = createAction('cart/addToCart', (newCartItem) => ({
  payload: {
    cartItem: newCartItem,
  },
}));

export const removeFromCart = createAction('cart/removeFromCart', (removedCartItem) => ({
  payload: {
    cartItem: removedCartItem,
  },
}));

export const changeQuantity = createAction('cart/changeQuantity', (updatedCartItem, updatedQuantity) => ({
  payload: {
    cartItem: updatedCartItem,
    quantity: updatedQuantity,
  },
}));

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
  },
  reducers: {
    addToCart: (state, { payload }) => {
      state.cartItems = [...state.cartItems, { painting: payload.cartItem, quantity: 1 }];
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((c) => c.painting.id !== payload.cartItem.id);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    changeQuantity: (state, { payload }) => {
      state.cartItems = state.cartItems.map(
        (cartItem) => (cartItem.painting.id === payload.cartItem.id
          ? { ...cartItem, quantity: payload.quantity } : cartItem
        ),
      );
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
  },
});

export default cartSlice.reducer;
