import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getOrders = createAsyncThunk(
  'orders/getAll', async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_API}/api/orders`);
    return { orders: data };
  },
);

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
    meta: {
      isGetOrdersLoading: false,
      getOrdersError: null,
      isGetOrdersLoaded: false,
    },
  },
  reducers: {},
  extraReducers: {
    [getOrders.pending]: (state) => {
      state.meta.isGetOrdersLoading = true;
      state.meta.getOrdersError = null;
      state.meta.isGetOrdersLoaded = false;
    },
    [getOrders.fullfilled]: (state, { payload }) => {
      state.meta.isGetOrdersLoading = false;
      state.meta.getOrdersError = false;
      state.meta.isGetOrdersLoaded = true;
      state.orders = payload.orders;
    },
    [getOrders.rejected]: (state, { error }) => {
      state.meta.isGetOrdersLoading = false;
      state.meta.getOrdersError = error;
      state.meta.isGetOrdersLoaded = true;
    },
  },
});

export default ordersSlice.reducer;
