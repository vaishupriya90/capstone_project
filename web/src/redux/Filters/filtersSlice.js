import { createSlice, createAction } from '@reduxjs/toolkit';

export const sortByPrice = createAction('filters/sortByPrice', (sortType) => ({
  payload: sortType,
}));

export const searchByValue = createAction('filters/search', (searchValue) => ({
  payload: searchValue,
}));

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    sortType: null,
    searchValue: '',
  },
  reducers: {
    sortByPrice: (state, { payload }) => ({
      sortType: payload,
    }),
  },
  searchByValue: (state, { payload }) => ({
    searchValue: payload,
  }),

});
