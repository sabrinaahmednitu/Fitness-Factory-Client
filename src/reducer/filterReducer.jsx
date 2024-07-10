const filterReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_FILTER_PRODUCTS':
      let priceArray = action.payload.map((curElem) => curElem.price);
      let maxPrice = Math.max(...priceArray); // es6 er update ... use korle ta argument hisabe nay

      //using reduce method
      // let maxPrice = priceArray.reduce(
      //   (initialVal, curVal) => Math.max(initialVal, curVal),
      //   0
      // );
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice: maxPrice, price: maxPrice },
      };

    case 'SET_GRID_VIEW':
      return {
        ...state,
        grid_view: true,
      };

    case 'SET_LIST_VIEW':
      return {
        ...state,
        grid_view: false,
      };

    //------------for sorting start--------------
    case 'GET_SORT_VALUE':
      // let userSortValue = document.getElementById('sort');
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      return {
        ...state,
        sorting_value: action.payload,
      };

    case 'SORTING_PRODUCTS':
      let newSortData;
      // let tempSortProduct = [...action.payload];

      const { filter_products } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        //for lowest price sort
        if (state.sorting_value === 'lowest') {
          return a.price - b.price;
        }

        //for highest price sorting
        if (state.sorting_value === 'highest') {
          return b.price - a.price;
        }
        //for a-z sorting
        if (state.sorting_value === 'a-z') {
          return a.name.localeCompare(b.name);
        }
        //for z-a sorting
        if (state.sorting_value === 'z-a') {
          return b.name.localeCompare(a.name);
        }
      };

      //for lowest price sort
      // if (state.sorting_value === 'lowest') {
      //   const sortingProducts = (a, b) => {
      //     return a.price - b.price;
      //   };

      // }

      //for highest price sorting
      // if (state.sorting_value === 'highest') {
      //   const sortingProducts = (a, b) => {
      //     return b.price - a.price;
      //   };

      // }

      //for a-z sorting
      // if (state.sorting_value === 'a-z') {
      //   newSortData = tempSortProduct.sort((a, b) =>
      //     a.name.localeCompare(b.name)
      //   );
      // }

      //for z-a sorting
      // if (state.sorting_value === 'z-a') {
      //   newSortData = tempSortProduct.sort((a, b) =>
      //     b.name.localeCompare(a.name)
      //   );
      // }

      newSortData = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortData,
      };

    //----------for sorting end-------------

    //--------------search part--------------
    case 'UPDATE_FILTERS_VALUE':
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value, //name r value ta update hoy aikhane
        },
      };

    //--------------company,category,price wise search part--------------
    case 'FILTER_PRODUCTS':
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text, category, company, color, price } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }
      if (category !== 'all') {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.category === category
        );
      }
      if (company !== 'all') {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
        );
      }
      if (color !== 'all') {
        tempFilterProduct = tempFilterProduct.filter((curElem) =>
          curElem.colors.includes(color)
        );
      }
      if (price === 0) {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => (curElem.price = price)
        );
      } else {
        {
          tempFilterProduct = tempFilterProduct.filter(
            (curElem) => curElem.price <= price
          );
        }
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };
    //--------------search part end--------------

    //to clear filters
    case 'CLEAR_FILTERS':
      return {
        ...state,
        filters: {
          ...state.filters,
          text: '',
          category: 'all',
          company: 'all',
          color: 'all',
          maxPrice: 0,
          minPrice: state.filters.maxPrice,
          price: state.filters.maxPrice,
        },
      };

    default:
      return state;
  }
};

export default filterReducer;
