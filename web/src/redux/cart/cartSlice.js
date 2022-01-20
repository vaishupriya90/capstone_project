import { createAction, createSlice } from '@reduxjs/toolkit';

const updateItemQuantity = ({ cartItems, id, quantity }) => {
  const updatedCartItems = cartItems;
  updatedCartItems.find((cartItem) => cartItem.id === id).quantity = quantity;
  return updatedCartItems;
};

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
    changeQuantity: (state, { payload: { painting, quantity } }) => (
      {
        cartItems: updateItemQuantity({
          cartItems: state.cartItems,
          id: painting.id,
          quantity,
        }),
      }
    ),
  },
});

export default cartSlice.reducer;
