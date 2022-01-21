import { createAction, createSlice } from '@reduxjs/toolkit';

const updateItemQuantity = ({ cartItems, id, quantity }) => {
  const updatedCartItems = cartItems;
  // updatedCartItems.find((cartItem) => cartItem.painting.id === id).quantity = quantity;
  // eslint-disable-next-line no-return-assign
  updatedCartItems.filter((c) => (c.id === id ? (c.quantity = quantity) : c.quantity));
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
    changeQuantity: (state, { payload }) => (
      {
        cartItems: updateItemQuantity({
          cartItems: state.cartItems,
          id: payload.cartItem.id,
          quantity: payload.quantity,
        }),
      }
    ),
  },
});

export default cartSlice.reducer;
