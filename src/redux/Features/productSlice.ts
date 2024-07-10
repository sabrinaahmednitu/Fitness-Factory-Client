import { PayloadAction, createSlice } from '@reduxjs/toolkit';
type TProduct = {
  _id: string;
  name: string;
  description: string;
  category: string;
  stock: number;
  price: number;
  quantity: string;
  isFeatured?: boolean;
  rating: string;
};
type TInitialState = {
  isLoading: boolean;
  isError: boolean;
  products: TProduct[];
  featureProducts: TProduct[];
  singleProduct: TProduct | null;
};
const initialState: TInitialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  singleProduct: null,
};
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<TProduct>) => {
      state.products.push({ ...action.payload, isFeatured: false });
    },
    setLoading: (state) => {
      state.isLoading = true;
    },
    setApiData: (state, action) => {
      const featureData = action.payload.filter(
        (currentElements) => currentElements.featured === true
      );
      state.products = action.payload;
      state.featureProducts = featureData;
      state.isLoading = false;
    },
    setApiError: (state) => {
      state.isError = true;
      state.isLoading = false;
    },
    setSingleLoading: (state) => {
      state.isLoading = true;
    },
    setSingleProduct: (state, action) => {
      state.singleProduct = action.payload;
      state.isLoading = false;
    },
    setSingleError: (state) => {
      state.isError = true;
      state.isLoading = false;
    },
  },
});
export const {
  addProduct,
  setLoading,
  setApiData,
  setApiError,
  setSingleLoading,
  setSingleProduct,
  setSingleError,
} = productSlice.actions;
export default productSlice.reducer;



