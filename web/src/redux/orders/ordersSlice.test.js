import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { configureStore } from '@reduxjs/toolkit';
import ordersReducer, { getOrders } from './ordersSlice';
import { getAllOrders, isGetOrdersLoading, getOrdersError } from './selectors';

const testOrders = [
  {
    orderNumber: 123456,
    userEmail: 'test@test.com',
    total: 100,
    orderDate: '01/01/2022',
    orderItems: {
      paintingId: 1,
      quantity: 2,
    },
  },
  {
    orderNumber: 456789,
    userEmail: 'test1@test.com',
    total: 200,
    orderDate: 200.0,
    orderItems: {
      paintingId: 2,
      quantity: 3,
    },
  },
  {
    orderNumber: 896745,
    userEmail: 'test3@test.com',
    total: 300,
    orderDate: 200.0,
    orderItems: {
      paintingId: 3,
      quantity: 1,
    },
  },
];

describe('orders', () => {
  test('should return the initial state', () => {
    expect(ordersReducer(undefined, {})).toEqual({
      paintings: [],
      meta: {
        isGetPaintingsLoading: false,
        getPaintingsError: null,
        isGetPaintingsLoaded: false,
      },
    });
  });

  describe('getPaintings', () => {
    test('pending', () => {
      const action = { type: getOrders.pending.type };

      const state = ordersReducer(undefined, action);

      expect(state).toEqual({
        paintings: [],
        meta: {
          isGetPaintingsLoading: true,
          getPaintingsError: null,
          isGetPaintingsLoaded: false,
        },
      });
    });

    test('on success', async () => {
      const mockApi = new MockAdapter(axios);
      mockApi.onGet(`${process.env.REACT_APP_BASE_API}/api/orders`).reply(200, testOrders);

      const store = configureStore({
        reducer: {
          orders: ordersReducer,
        },
      });

      await store.dispatch(getOrders());

      expect(getAllOrders(store.getState())).toEqual(testOrders);
      expect(getOrdersError(store.getState())).toEqual(null);
      expect(isGetOrdersLoading(store.getState())).toEqual(false);
    });

    test('on failure', async () => {
      const mockApi = new MockAdapter(axios);
      mockApi.onGet(`${process.env.REACT_APP_BASE_API}/api/orders`).reply(500);

      const store = configureStore({
        reducer: {
          paintings: ordersReducer,
        },
      });

      await store.dispatch(getOrders());

      expect(getAllOrders(store.getState())).toEqual([]);
      expect(getOrdersError(store.getState()).message).toEqual('Request failed with status code 500');
      expect(isGetOrdersLoading(store.getState())).toEqual(false);
    });
  });
});
