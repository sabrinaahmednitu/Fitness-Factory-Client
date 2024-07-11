import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './Api/baseApi';
import productSlice from './Features/productSlice';
import filterSlice from './Features/filterSlice';
import cartSlice from './Features/cartSlice';


export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    products: productSlice,
    filter: filterSlice,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(baseApi.middleware),
});
