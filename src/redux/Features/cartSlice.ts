// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// interface CartItem {
//   id: string; // or whatever type your id is
//   name: string;
//   images: string; // assuming image is a string URL
//   price: number;
//   quantity: number;
// }

// interface CartState {
//   cart: [];
//   total_cart_item: number;
//   total_price: number;
//   shipping_fee: number;
// }

// const initialState: CartState = {
//   cart: [],
//   total_cart_item: 0,
//   total_price: 0,
//   shipping_fee: 5,
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action: PayloadAction<CartItem>) => {
//       const { id, quantity } = action.payload;
//       let existingProduct = state.cart.find((item) => item.id === id);

//       if (existingProduct) {
//         existingProduct.quantity += quantity;
//       } else {
//         state.cart.push(action.payload);
//       }
//     },
//     removeItem: (state, action: PayloadAction<string>) => {
//       state.cart = state.cart.filter((item) => item.id !== action.payload);
//     },
//     clearCart: (state) => {
//       state.cart = [];
//     },
//     setDecrease: (state, action: PayloadAction<string>) => {
//       let item = state.cart.find((item) => item.id === action.payload);
//       if (item && item.quantity > 1) {
//         item.quantity--;
//       }
//     },
//     setIncrease: (state, action: PayloadAction<string>) => {
//       let item = state.cart.find((item) => item.id === action.payload);
//       if (item) {
//         item.quantity++;
//       }
//     },
//     totalCartItem: (state) => {
//       state.total_cart_item = state.cart.reduce(
//         (total, item) => total + item.quantity,
//         0
//       );
//     },
//     cartTotalPrice: (state) => {
//       state.total_price = state.cart.reduce(
//         (total, item) => total + item.price * item.quantity,
//         0
//       );
//     },
//   },
// });

// export const {
//   addToCart,
//   removeItem,
//   clearCart,
//   setDecrease,
//   setIncrease,
//   totalCartItem,
//   cartTotalPrice,
// } = cartSlice.actions;

// export default cartSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '../../../types'; // Adjust the path as necessary

interface CartState {
  cart: CartItem[];
  total_price: number;
  shipping_fee: number;
}

const initialState: CartState = {
  cart: [],
  total_price: 0,
  shipping_fee: 50, // Example shipping fee
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ product: CartItem; quantity: number }>
    ) => {
      const { product, quantity } = action.payload;
      console.log(product);
      console.log(state.cart)
      const existingProductIndex = state.cart.findIndex(
        (item) => item._id === product._id
      );

      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex].quantity += quantity;
      } else {
        state.cart.push({ ...product, quantity });
      }

      state.total_price = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      state.total_price = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    setIncrease: (state, action: PayloadAction<string>) => {
      const item = state.cart.find((item) => item._id === action.payload);
      if (item && item.quantity < item.stock) {
        item.quantity += 1;
      }
      state.total_price = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    setDecrease: (state, action: PayloadAction<string>) => {
      const item = state.cart.find((item) => item._id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      state.total_price = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    clearCart: (state) => {
      state.cart = [];
      state.total_price = 0;
    },
  },
});

export const { addToCart, removeItem, setIncrease, setDecrease, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

