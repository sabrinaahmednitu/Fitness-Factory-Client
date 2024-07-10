import React from 'react';

const productReducer = (state, action) => {
  // if (action.type === "SET_LOADING") {
  //     return {
  //         ...state,
  //         isLoading:true,
  //     };
  // }

  // if (action.type === 'API_ERROR') {
  //      return {
  //        ...state,
  //          isLoading: false,
  //        isError:true,
  //      };
  // }

  //if er poriborte amara switch use korte pari easy way
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
      };

    //products state e data assign kora action.payload dea
    case 'SET_API_DATA':
      const featureData = action.payload.filter((currentElements) => {
        return currentElements.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };

    case 'API_ERROR':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    // for single product
    case 'SET_SINGLE_LOADING':
      return {
        ...state,
        isSingleLoading: true,
      };

    case 'SET_SINGLE_PRODUCT':
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case 'SET_SINGLE_ERROR':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default productReducer;
