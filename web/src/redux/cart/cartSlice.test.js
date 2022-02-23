import { configureStore } from '@reduxjs/toolkit';
import cartReducer, {
  addToCart, changeQuantity, clearCart, removeFromCart,
} from './cartSlice';
import getCartItems from './selectors';

const testPaintings = [
  {
    id: 1,
    name: 'The Lonely Boat',
    description: 'Some Description',
    price: 200.0,
    availableQuantity: 10,
    image: 'https://images.unsplash.com/photo-1552353617-3bfd679b3bdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Ym9hdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 2,
    name: 'Peacock',
    description: 'Some Description',
    price: 99.0,
    availableQuantity: 7,
    image: 'https://media.istockphoto.com/photos/portrait-of-peacock-watercolor-picture-id872927220?b=1&k=20&m=872927220&s=170667a&w=0&h=vbRQncIMsgjELbxqhm6OrWUfVkV5iK47btDr0_T_ovs=',
  },
  {
    id: 3,
    name: 'Silhouette house',
    description: 'Some Description',
    price: 120.0,
    availableQuantity: 15,
    image: 'https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
];

describe('cart', () => {
  test('should return the initial state', () => {
    expect(cartReducer(undefined, {})).toEqual({
      cartItems: [],
    });
  });

  describe('addToCart', () => {
    test('on add', async () => {
      const store = configureStore({
        reducer: {
          cartItems: cartReducer,
        },
      });

      store.dispatch(addToCart(testPaintings[0]));
      store.dispatch(addToCart(testPaintings[1]));

      expect(getCartItems(store.getState()))
        .toEqual([
          { painting: testPaintings[0], quantity: 1 },
          { painting: testPaintings[1], quantity: 1 },
        ]);
    });
  });

  describe('remove from cart', () => {
    test('on remove', async () => {
      const store = configureStore({
        reducer: { cartItems: cartReducer },
      });
      store.dispatch(addToCart(testPaintings[0]));
      store.dispatch(addToCart(testPaintings[1]));
      store.dispatch(removeFromCart(testPaintings[0]));
      expect(getCartItems(store.getState())).toEqual([{ painting: testPaintings[1], quantity: 1 }]);
    });
  });

  describe('change quantity', () => {
    test('edit quantity', async () => {
      const store = configureStore({
        reducer: {
          cartItems: cartReducer,
        },
      });
      store.dispatch(addToCart(testPaintings[2]));
      console.log(getCartItems(store.getState())[0].quantity);
      store.dispatch(changeQuantity(testPaintings[2], 5));
      console.log(getCartItems(store.getState())[0].quantity);
      const updatedItem = getCartItems(store.getState())
        .filter((p) => p.painting.id === testPaintings[2].id);
      expect(updatedItem[0].quantity).toBe(5);
    });
  });

  describe('clear cart', () => {
    test('empty the cart', async () => {
      const store = configureStore({
        reducer: {
          cartItems: cartReducer,
        },
      });
      store.dispatch(addToCart(testPaintings[1]));
      store.dispatch(addToCart(testPaintings[2]));
      store.dispatch(addToCart(testPaintings[0]));
      expect(getCartItems(store.getState()).length).toEqual(3);
      store.dispatch(clearCart());
      expect(getCartItems(store.getState()).length).toEqual(0);
    });
  });
});
