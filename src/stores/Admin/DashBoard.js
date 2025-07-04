import React, { useContext, useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import Welcomes from './Welcomes'
import AddProduct from './AddProduct'
import AddService from './AddServices'
import ViewProduct from './ViewProduct'
import ViewServices from './ViewServices'
import ViewEnquiries from './ViewEnquiries'
import { loginStatus } from '../../App'
import { useNavigate } from 'react-router-dom'
import ViewOrders from './OrdersDetails'

const DashBoard = () => {
  const [view, setview] = useState("");
  const [token, setToken] = useContext(loginStatus);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  // 🟡 If token is empty, redirect
  useEffect(() => {
    if (token === "") {
      navigate("/admin");
    }
  }, [token, navigate]);

  // 🟡 Fetch user data, handle 401 separately
  useEffect(() => {
    if (token) {
      axios.get("https://gcapp-server.onrender.com/dashboard", {
        headers: {
          "x-token": token
        }
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
        // Handle unauthorized
        if (err.response && err.response.status === 401) {
          setToken("");
        }
      });
    }
  }, [token, setToken]);

  const dashboardview = useMemo(() => {
    if (view === "") {
      return <Welcomes />;
    } else if (view === 'AddProduct') {
      return <AddProduct />;
    } else if (view === 'AddServices') {
      return <AddService />;
    } else if (view === 'ViewProduct') {
      return <ViewProduct />;
    } else if (view === 'ViewServices') {
      return <ViewServices />;
    } else if (view === 'ViewEnquiries') {
      return <ViewEnquiries />;
    } else if (view === 'ViewOrders'){
      return <ViewOrders />;
    }
    else {
      return <h1>Invalid View</h1>;
    }
  }, [view]);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <aside className='col-lg-2'>
          <h4 onClick={() => setview("")}>Welcome {user.name} Boss</h4>
          <button onClick={() => setview("ViewOrders")}>View Orders</button>
          <button onClick={() => setview("AddProduct")}>Add Product</button>
          <button onClick={() => setview("AddServices")}>Add Services</button>
          <button onClick={() => setview("ViewProduct")}>View Products</button>
          <button onClick={() => setview("ViewServices")}>View Services</button>
          <button onClick={() => setview("ViewEnquiries")}>View Enquiries</button>
          <button className='btn btn-secondary' onClick={() => setToken("")}>Logout</button>
        </aside>
        <div className='col-lg-10'>
          {dashboardview}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;