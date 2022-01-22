import { createSlice, createAction } from '@reduxjs/toolkit';

export const searchByValue = createAction('filters/search', (searchValue) => ({
  payload: searchValue,
}));

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    searchValue: '',
  },
  reducers: {
    searchByValue: (state, { payload }) => ({
      searchValue: payload,
    }),
  },
});
