// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// const initialState = {
//   filter_products: [], // for grid and list
//   all_products: [], // for filter section
//   grid_view: true, // grid view
//   sorting_value: 'lowest',
//   filters: {
//     text: '',
//     category: 'all',
//     company: 'all',
//     color: 'all',
//     maxPrice: 0,
//     minPrice: 0,
//     price: 0,
//   },
// };

// const filterSlice = createSlice({
//   name: 'filter',
//   initialState,
//   reducers: {
//     loadFilterProducts: (state, action: PayloadAction<any[]>) => {
//       let priceArray = action.payload.map((curElem) => curElem.price);
//       let maxPrice = Math.max(...priceArray);

//       return {
//         ...state,
//         filter_products: [...action.payload],
//         all_products: [...action.payload],
//         filters: { ...state.filters, maxPrice: maxPrice, price: maxPrice },
//       };
//     },
//     setGridView: (state) => {
//       state.grid_view = true;
//     },
//     setListView: (state) => {
//       state.grid_view = false;
//     },
//     getSortValue: (state, action: PayloadAction<string>) => {
//       state.sorting_value = action.payload;
//     },
//     sortingProducts: (state) => {
//       let tempSortProduct = [...state.filter_products];

//       const sortingProducts = (a, b) => {
//         if (state.sorting_value === 'lowest') {
//           return a.price - b.price;
//         }
//         if (state.sorting_value === 'highest') {
//           return b.price - a.price;
//         }
//         if (state.sorting_value === 'a-z') {
//           return a.name.localeCompare(b.name);
//         }
//         if (state.sorting_value === 'z-a') {
//           return b.name.localeCompare(a.name);
//         }
//       };

//       state.filter_products = tempSortProduct.sort(sortingProducts);
//     },
//     updateFiltersValue: (
//       state,
//       action: PayloadAction<{ name: string; value: any }>
//     ) => {
//       const { name, value } = action.payload;
//       state.filters = {
//         ...state.filters,
//         [name]: value,
//       };
//     },
//     filterProducts: (state) => {
//       let { all_products } = state;
//       let tempFilterProduct = [...all_products];

//       const { text, category, company, color, price } = state.filters;

//       if (text) {
//         tempFilterProduct = tempFilterProduct.filter((curElem) => {
//           return curElem.name.toLowerCase().includes(text);
//         });
//       }
//       if (category !== 'all') {
//         tempFilterProduct = tempFilterProduct.filter(
//           (curElem) => curElem.category === category
//         );
//       }
//       if (company !== 'all') {
//         tempFilterProduct = tempFilterProduct.filter(
//           (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
//         );
//       }
//       if (color !== 'all') {
//         tempFilterProduct = tempFilterProduct.filter((curElem) =>
//           curElem.colors.includes(color)
//         );
//       }
//       if (price === 0) {
//         tempFilterProduct = tempFilterProduct.filter(
//           (curElem) => (curElem.price = price)
//         );
//       } else {
//         tempFilterProduct = tempFilterProduct.filter(
//           (curElem) => curElem.price <= price
//         );
//       }

//       state.filter_products = tempFilterProduct;
//     },
//     clearFilters: (state) => {
//       state.filters = {
//         ...state.filters,
//         text: '',
//         category: 'all',
//         company: 'all',
//         color: 'all',
//         maxPrice: state.filters.maxPrice,
//         minPrice: state.filters.maxPrice,
//         price: state.filters.maxPrice,
//       };
//     },
//   },
// });

// export const {
//   loadFilterProducts,
//   setGridView,
//   setListView,
//   getSortValue,
//   sortingProducts,
//   updateFiltersValue,
//   filterProducts,
//   clearFilters,
// } = filterSlice.actions;

// export default filterSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  all_products: [],
  filter_products: [],
  sorting_value: 'lowest',
  filters: {
    text: '',
    category: 'all',
    price: 0,
    minPrice: 0,
    maxPrice: 0,
  },
  featured_products: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    loadFilterProducts: (state, action) => {
      const featureData = action.payload.filter(
        (product) => product.featured === true
      );
      state.all_products = action.payload;
      state.filter_products = action.payload;
      state.featured_products = featureData;
      
      const prices = action.payload.map((product) => product.price);
      state.filters.maxPrice = Math.max(...prices);
      state.filters.minPrice = Math.min(...prices);
      state.filters.price = Math.max(...prices);
    },
    updateFiltersValue: (state, action) => {
      state.filters[action.payload.name] = action.payload.value;
    },
    filterProducts: (state) => {
      let tempProducts = [...state.all_products];

      const { text, category, price } = state.filters;

      if (text) {
        tempProducts = tempProducts.filter((product) =>
          product.name.toLowerCase().includes(text.toLowerCase())
        );
      }

      if (category !== 'all') {
        tempProducts = tempProducts.filter(
          (product) => product.category === category
        );
      }

      tempProducts = tempProducts.filter((product) => product.price <= price);

      state.filter_products = tempProducts;
    },
    updateSortValue: (state, action) => {
      state.sorting_value = action.payload;
    },
    sortingProducts: (state) => {
      let sortedProducts = [...state.filter_products];
      const { sorting_value } = state;

      if (sorting_value === 'lowest') {
        sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
      } else if (sorting_value === 'highest') {
        sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
      } else if (sorting_value === 'a-z') {
        sortedProducts = sortedProducts.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else if (sorting_value === 'z-a') {
        sortedProducts = sortedProducts.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }

      state.filter_products = sortedProducts;
    },
    clearFilters: (state) => {
      state.filters = {
        text: '',
        category: 'all',
        price: state.filters.maxPrice,
        minPrice: state.filters.minPrice,
        maxPrice: state.filters.maxPrice,
      };
      state.filter_products = state.all_products;
    },
  },
});

export const {
  loadFilterProducts,
  updateFiltersValue,
  filterProducts,
  updateSortValue,
  sortingProducts,
  clearFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
