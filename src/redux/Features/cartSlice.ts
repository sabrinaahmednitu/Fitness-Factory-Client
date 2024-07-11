// import { createSlice } from '@reduxjs/toolkit';

// const getLocalCartData = () => {
//   let localCartData = localStorage.getItem('nituCart');
//   if (localCartData === []) {
//     return [];
//   } else {
//     return JSON.parse(localCartData);
//   }
// };

// const initialState = {
//   cart: getLocalCartData(),
//   total_cart_item: '',
//   total_price: '',
//   shipping_fee: 5000,
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const { id, currentColor, amount, singleProduct } = action.payload;

//       let existingProduct = state.cart.find(
//         (curItem) => curItem.id === id + currentColor
//       );

//       if (existingProduct) {
//         state.cart = state.cart.map((curElem) => {
//           if (curElem.id === id + currentColor) {
//             let newAmount = curElem.amount + amount;

//             if (newAmount >= curElem.max) {
//               newAmount = curElem.max;
//             }
//             return {
//               ...curElem,
//               amount: newAmount,
//             };
//           } else {
//             return curElem;
//           }
//         });
//       } else {
//         let cartProduct = {
//           id: id + currentColor,
//           name: singleProduct.name,
//           color: currentColor,
//           amount: amount,
//           image: singleProduct.image[0].url,
//           price: singleProduct.price,
//           max: singleProduct.stock,
//         };
//         state.cart.push(cartProduct);
//       }
//     },
//     removeItem: (state, action) => {
//       state.cart = state.cart.filter(
//         (curItem) => curItem.id !== action.payload
//       );
//     },
//     clearCart: (state) => {
//       state.cart = [];
//     },
//     setDecrease: (state, action) => {
//       state.cart = state.cart.map((curElem) => {
//         if (curElem.id === action.payload) {
//           let decAmount = curElem.amount - 1;
//           if (decAmount <= 1) {
//             decAmount = 1;
//           }
//           return {
//             ...curElem,
//             amount: decAmount,
//           };
//         } else {
//           return curElem;
//         }
//       });
//     },
//     setIncrease: (state, action) => {
//       state.cart = state.cart.map((curElem) => {
//         if (curElem.id === action.payload) {
//           let incAmount = curElem.amount + 1;
//           if (incAmount >= curElem.max) {
//             incAmount = curElem.max;
//           }
//           return {
//             ...curElem,
//             amount: incAmount,
//           };
//         } else {
//           return curElem;
//         }
//       });
//     },
//     totalCartItem: (state) => {
//       state.total_cart_item = state.cart.reduce((inititalVAl, curElem) => {
//         let { amount } = curElem;
//         return inititalVAl + amount;
//       }, 0);
//     },
//     cartTotalPrice: (state) => {
//       state.total_price = state.cart.reduce((initialVal, curElem) => {
//         let { price, amount } = curElem;
//         return initialVal + price * amount;
//       }, 0);
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
interface CartItem {
  id: string; // or whatever type your id is
  name: string;
  image: string; // assuming image is a string URL
  price: number;
  quantity: number;
}

interface CartState {
  cart: [];
  total_cart_item: number;
  total_price: number;
  shipping_fee: number;
}

const initialState: CartState = {
  cart: [],
  total_cart_item: 0,
  total_price: 0,
  shipping_fee: 5000,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { id, quantity } = action.payload;
      let existingProduct = state.cart.find((item) => item.id === id);

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    setDecrease: (state, action: PayloadAction<string>) => {
      let item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    setIncrease: (state, action: PayloadAction<string>) => {
      let item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    totalCartItem: (state) => {
      state.total_cart_item = state.cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },
    cartTotalPrice: (state) => {
      state.total_price = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
});

export const {
  addToCart,
  removeItem,
  clearCart,
  setDecrease,
  setIncrease,
  totalCartItem,
  cartTotalPrice,
} = cartSlice.actions;

export default cartSlice.reducer;
