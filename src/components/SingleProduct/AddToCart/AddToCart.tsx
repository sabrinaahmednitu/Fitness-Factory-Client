import React, { useState } from 'react';
import './AddToCart.css';
import { FaCheck } from 'react-icons/fa';
import CartAmountToggle from '../CartAmountToggle/CartAmountToggle';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../../context/cartContext';

const AddToCart = ({ singleProduct }) => {
  const { addToCart } = useCartContext();

  const { id, colors, stock } = singleProduct;

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  return (
    <div>
      <div className="colors">
        <p>
          Color :{' '}
          {colors.map((color, index) => (
            <button
              key={index}
              style={{ backgroundColor: color }}
              className={
                currentColor === color ? 'btnStyle active' : 'btnStyle'
              }
              onClick={() => setCurrentColor(color)}
            >
              {currentColor === color ? (
                <FaCheck className="checkStyle"></FaCheck>
              ) : null}
            </button>
          ))}
        </p>
      </div>

      <hr />
      {/* add to cart */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      ></CartAmountToggle>

      <NavLink
        to="/cart"
        onClick={() => addToCart(id, currentColor, amount, singleProduct)}
      >
        <button className="addButton">Add To Cart;</button>
      </NavLink>
    </div>
  );
};

export default AddToCart;
