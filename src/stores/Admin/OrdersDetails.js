import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ViewOrders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get('https://gcapp-server.onrender.com/order')
      .then((res) => {
        console.log("Orders Response:", res.data);

        // Convert to array if not already
        if (Array.isArray(res.data)) {
          setOrders(res.data);
        } else if (typeof res.data === 'object') {
          setOrders([res.data]); // wrap object into array ✅
        } else {
          setOrders([]);
          setError("Unexpected response format");
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Error fetching orders");
      });
  }, []);

  return (
    <div className="container mt-5">
      <h3 className="mb-4">📦 Order Enquiries</h3>

      {error && <div className="alert alert-danger">{error}</div>}

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>Items</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, i) => (
                <tr key={i}>
                  <td>{order.username}</td>
                  <td>{order.mobile}</td>
                  <td>{order.address}</td>
                  <td>
                    <ul className="mb-0 ps-3">
                      {Array.isArray(order.items)
                        ? order.items.map((item, j) => (
                            <li key={j}>
                              {item.Product} x {item.quantity || 1} = ₹{(item.Offer || 0) * (item.quantity || 1)}
                            </li>
                          ))
                        : "No items"}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewOrders;