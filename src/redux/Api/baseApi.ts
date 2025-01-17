import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        method: 'GET',
        url: '/products',
      }),
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        method: 'GET',
        url: `/products/${id}`,
      }),
    }),
  }),
});

// auto-generated based on the defined endpoints
export const {  useGetProductsQuery ,useGetSingleProductQuery } = baseApi;
