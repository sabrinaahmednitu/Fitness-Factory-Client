import React from 'react';
import { NavLink } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import { useCartContext } from '../../../context/cartContext';
import FormatPrice from '../../../Helpers/FormatPrice';
import './Cart.css';

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  console.log(cart);


  if (cart.length === 0) {
    return <div>
      <h3 className='empty-cart'>No Item In The Cart</h3>
    </div>
  }

  return (
    <div className="container mx-auto">
      <div className="cart-heading grid-five-column">
        <p>Item</p>
        <p className="cart-hide">Price</p>
        <p>Quantity</p>
        <div className="cart-hide">Subtotal</div>
        <p>Remove</p>
      </div>
      <hr />
      <div className="cart-item">
        {cart.map((curElem) => {
          return <CartItem key={curElem.id} {...curElem}></CartItem>;
        })}
      </div>
      <hr />
      <div className="cart-two-button">
        <NavLink to="/products" className="left-btn">
          Continue Shopping
        </NavLink>
        <button className="right-btn" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
      {/* ------TOTAL PRICE ----------*/}
      <div className="order-total--amount">
        <div className="order-total--subdata">
          <div className="total-field">
            <p>subtotal:</p>
            <p>
              <FormatPrice price={total_price}></FormatPrice>
            </p>
          </div>
          <div className="total-field">
            <p>shipping fee:</p>
            <p>
              <FormatPrice price={shipping_fee}></FormatPrice>
            </p>
          </div>
          <div className="total-field">
            <p>order Total : </p>
            <p>
              <FormatPrice price={shipping_fee + total_price}></FormatPrice>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
