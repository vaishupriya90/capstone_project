import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPaintings = createAsyncThunk(
  'paintings/getAll',
  async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_API}/api/paintings`);
    return { paintings: data };
  },
);

const paintingsSlice = createSlice({
  name: 'paintings',
  initialState: {
    paintings: [],
    meta: {
      isGetPaintingsLoading: false,
      getPaintingsError: null,
      isGetPaintingsLoaded: false,
    },
  },
  reducers: {},
  extraReducers: {
    [getPaintings.pending]: (state) => {
      state.meta.isGetPaintingsLoading = true;
      state.meta.isGetPaintingsLoaded = false;

      state.meta.getPaintingsError = null;
    },
    [getPaintings.fulfilled]: (state, { payload }) => {
      state.meta.isGetPaintingsLoading = false;
      state.meta.isGetPaintingsLoaded = true;
      state.meta.getPaintingsError = null;
      state.paintings = payload.paintings;
    },
    [getPaintings.rejected]: (state, { error }) => {
      state.meta.isGetPaintingsLoading = false;
      state.meta.isGetPaintingsLoaded = true;
      state.meta.getPaintingsError = error;
    },
  },
});

export default paintingsSlice.reducer;
