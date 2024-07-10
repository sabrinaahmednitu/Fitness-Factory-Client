const cartReducer = (state, action) => {
  // ADD_TO_CART
  if (action.type === 'ADD_TO_CART') {
    let { id, currentColor, amount, singleProduct } = action.payload;
    // console.log('add to cart', singleProduct);

    //tackel existing product
    let existingProduct = state.cart.find(
      (curItem) => curItem.id == id + currentColor
    );

    if (existingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id == id + currentColor) {
          let newAmount = curElem.amount + amount;

          if (newAmount >= curElem.max) {
            //max=stock
            newAmount = curElem.max;
          }
          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: id + currentColor, //id different hobe color er jonne
        name: singleProduct.name,
        color: currentColor,
        amount: amount,
        image: singleProduct.image[0].url,
        price: singleProduct.price,
        max: singleProduct.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  // REMOVE ITEM
  if (action.type === 'REMOVE_ITEM') {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  //remove all cart
  if (action.type === 'CLEAR_CART') {
    return {
      ...state,
      cart: [],
    };
  }

  //set increment and decrement on cart page
  if (action.type === 'SET_DECREMENT') {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        // console.log('matched',curElem);
        let decAmount = curElem.amount - 1;
        //tackel -1
        if (decAmount <= 1) {
          decAmount = 1;
        }
        //jader id match hoiche tader amount chage korchi
        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        //r jader hoyni as it is pass kore dechi
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }
  //decrement on cart page

  if (action.type === 'SET_INCREMENT') {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount + 1;
        //tackel outof stock
        if (incAmount >= curElem.max) {
          incAmount = curElem.max;
        }
        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  //cart item update at navbar corner
  // if (action.type === 'TOTAL_CART_ITEM') {
  //   let updatedItemValue = state.cart.reduce((inititalVAl, curElem) => {
  //     let { amount } = curElem;
  //     inititalVAl = inititalVAl + amount;
  //     return inititalVAl;
  //   }, 0); //total-cart-item=0

  //   return {
  //     ...state,
  //     total_cart_item: updatedItemValue,
  //   };
  // }

  //CART_TOTAL_PRICE
  // if (action.type === 'CART_TOTAL_PRICE') {
  //   let totalPrice = state.cart.reduce((initialVal,curElem) => {
  //     let { price, amount } = curElem
  //     initialVal = initialVal + price * amount;
  //     return initialVal;
  //   }, 0)
  //   return {
  //     ...state,
  //     total_price:totalPrice
  //   }
  // }

  return state;
};

export default cartReducer;
