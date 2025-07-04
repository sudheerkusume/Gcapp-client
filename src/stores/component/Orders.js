import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Orders = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Receiving cart items and user info
  const cartItems = location.state?.cartItems || [];
  const user = location.state?.user || {};

  // Form states
  const [username, setUsername] = useState(user.name || "");
  const [mobile, setMobile] = useState(user.mobile || "");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can customize this payload
    const orderPayload = {
      items: cartItems,
      username,
      mobile,
      address,
    };

      console.log("Sending order payload:", orderPayload);

    axios.post(`https://gcapp-server.onrender.com/order`, orderPayload)
      .then((res) => {
        alert("Your Order was Successful");
        navigate("/"); // redirect to homepage or success page
      })
      .catch((err) => {
        console.log("Order Error:", err);
        alert("Something went wrong!");
      });
  };

  return (
    <div className='container my-5'>
      <div className='row justify-content-center'>
        <div className='col-lg-6'>
          <h4 className='mb-4'>📝 Order Details & Address</h4>
          <form onSubmit={handleSubmit}>
            <input
              name='username'
              value={username}
              placeholder='Enter Name'
              className='form-control mb-3'
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              name='mobile'
              value={mobile}
              placeholder='Contact Number'
              className='form-control mb-3'
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <input
              name='address'
              value={address}
              placeholder='Your Address'
              className='form-control mb-3'
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <input
              type='submit'
              value='Submit Order'
              className='btn btn-primary w-100'
            />
          </form>
        </div>

        {/* Optional: Show cart summary */}
        {cartItems.length > 0 && (
          <div className='col-lg-6 mt-5 mt-lg-0'>
            <h5>🛒 Your Cart Summary</h5>
            <ul className='list-group mb-3'>
              {cartItems.map((item, index) => (
                <li key={index} className='list-group-item d-flex justify-content-between align-items-center'>
                  <div>
                    <strong>{item.Product}</strong> x {item.quantity || 1}
                  </div>
                  <span>₹{(item.Offer || 0) * (item.quantity || 1)}</span>
                </li>
              ))}
            </ul>
            <div className='text-end fw-bold'>
              Total: ₹{cartItems.reduce((sum, item) => sum + (item.Offer || 0) * (item.quantity || 1), 0)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;