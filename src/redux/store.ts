import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './Api/baseApi';
import productSlice from './Features/productSlice';
import filterSlice from './Features/filterSlice';


export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    products: productSlice,
    filter: filterSlice,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(baseApi.middleware),
});
