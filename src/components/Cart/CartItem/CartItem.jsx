import React from 'react';
import './CartItem.css';
import FormatPrice from '../../../Helpers/FormatPrice';
import CartAmountToggle from '../../SingleProduct/CartAmountToggle/CartAmountToggle';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../../../context/cartContext';

const CartItem = ({ id, name, image, color, price, amount }) => {

    const { removeItem, setIncrease, setDecrease } = useCartContext();

  // const setIncrease = () => {
  //   amount < stock ? setAmount(amount + 1) : setAmount(stock);
  // };
  // const setDecrease = () => {
  //   amount > 1 ? setAmount(amount - 1) : setAmount(1);
  // };
  return (
    <div>
      <div className="grid-five-column ">
        {/* ---------cart-item---------- */}
        <div className="cart-item-content">
          <div>
            <figure>
              <img src={image} alt="" />
            </figure>
          </div>
          <div>
            <p>{name}</p>
            <div className="color-div">
              <p>color : </p>
              <div
                className="color-style "
                style={{
                  backgroundColor: color,
                  color: color,
                }}
              ></div>
            </div>
          </div>
        </div>
        {/* ---------Price---------- */}
        <div className="cart-hide">
          <p>
            <FormatPrice price={price}></FormatPrice>
          </p>
        </div>
        {/* ---------Quantity---------- */}
        <div className="cart-quantity">
          <CartAmountToggle
            amount={amount}
            setDecrease={()=>setDecrease(id)}
            setIncrease={()=>setIncrease(id)}
          ></CartAmountToggle>
        </div>
        {/* ---------Subtotal---------- */}
        <div className="cart-hide">
          <p>
            <FormatPrice price={price * amount}></FormatPrice>
          </p>
        </div>
        {/* ---------cart-remove---------- */}
        <div>
          <FaTrash className="remove-icon" onClick={()=>removeItem(id)}></FaTrash>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
