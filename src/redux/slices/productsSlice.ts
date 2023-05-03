import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';
import { RootState } from '../store';

type FetchProductsArgs = Record<string, string>;

export const fetchProducts = createAsyncThunk(
  'products/fetchByProducts',
  async (params: FetchProductsArgs) => {
    const { sortBy, order, categorySort, search, currentPage } = params;
    const res = await axios.get<Product[]>(
      `https://643e86fd6c30feced82b58b5.mockapi.io/items?page=${currentPage}&limit=3&${categorySort}&sortBy=${sortBy}&order=${order}${search}`
    );
    return res.data as Product[];
  }
);

type Product = {
  id: string, 
  title: string, 
  price: number, 
  imageUrl: string, 
  sizes: number[], 
  types: number[]
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

interface ProductsSliceState {
  items: Product[],
  status: Status
}

const initialState: ProductsSliceState = {
  items: [],
  status: Status.LOADING, // loading | success | error
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    })
  },
});

export const selectProducts = (state: RootState) => state.products;

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;