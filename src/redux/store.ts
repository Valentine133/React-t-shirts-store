import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import products from './slices/productsSlice';

export const store = configureStore({
  reducer: { 
    filter,
    cart,
    products,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;