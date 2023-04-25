import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetchByProducts',
  async (params, thunkAPI) => {
    const { sortBy, order, categorySort, search, currentPage } = params;
    const res = await axios.get(
      `https://643e86fd6c30feced82b58b5.mockapi.io/items?page=${currentPage}&limit=3&${categorySort}&sortBy=${sortBy}&order=${order}${search}`
    );
    return res.data;
  }
);

const initialState = {
  items: [],
  status: 'loading', // loading | success | error
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchProducts.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    }
  }
});

export const selectProducts = (state) => state.products;

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;