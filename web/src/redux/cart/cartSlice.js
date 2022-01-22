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
    cartItems: [],
  },
  reducers: {
    addToCart: (state, { payload }) => ({
      cartItems: [...state.cartItems, { painting: payload.cartItem, quantity: 1 }],
    }),
    removeFromCart: (state, { payload }) => (
      { cartItems: state.cartItems.filter((c) => c.painting.id !== payload.cartItem.id) }
    ),
    changeQuantity: (state, { payload }) => (
      {
        cartItems: state.cartItems.map(
          (cartItem) => (cartItem.painting.id === payload.cartItem.id
            ? { ...cartItem, quantity: payload.quantity } : cartItem
          ),
        ),
      }
    ),
  },
});

export default cartSlice.reducer;
