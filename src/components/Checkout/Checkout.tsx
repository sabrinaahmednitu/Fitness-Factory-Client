import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
     const [userDetails, setUserDetails] = useState({
       name: '',
       email: '',
       phone: '',
       address: '',
     });

     const dispatch = useDispatch();
     const navigate = useNavigate();
     const { cart, total_price } = useSelector((state) => state.cart);

     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       const { name, value } = e.target;
       setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
     };

     const handlePlaceOrder = () => {
       if (
         !userDetails.name ||
         !userDetails.email ||
         !userDetails.phone ||
         !userDetails.address
       ) {
         alert('Please fill in all the details.');
         return;
       }

       dispatch(updateStockAfterCheckout());
       navigate('/success');
     };

  return (
    <div className="max-w-lg mx-auto p-6 border border-gray-300 rounded-lg bg-gray-50 mt-[110px]">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={userDetails.name}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userDetails.email}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={userDetails.phone}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          name="address"
          placeholder="Delivery Address"
          value={userDetails.address}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      <h3 className="text-xl font-semibold mt-6">
        Total Price: ${total_price}
      </h3>

      <button
        className="mt-6 w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700"
        onClick={handlePlaceOrder}
      >
        Place Order (Cash on Delivery)
      </button>
    </div>
  );
};

export default Checkout;
