import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/cartContext';
import { FaShoppingCart } from "react-icons/fa";
import image from '../Accets/Flag1.PNG';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart();

  return (
    <nav className="navbar fixed-top navbar-expand-sm bg-white shadow-sm px-3" style={{ zIndex: 1050 }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        {/* Logo + Flag */}
        <div className="d-flex align-items-center">
          <NavLink to='/' className="d-flex align-items-center text-decoration-none me-2">
            <span style={{ color: '#ffc107', fontWeight: 'bold', fontSize: '30px' }}>more</span>
            <span style={{ color: 'green', fontWeight: 'bold', fontSize: '24px' }}>In</span>
          </NavLink>
          <img src={image} alt="flag" style={{ width: '35px', height: '25px', objectFit: 'cover' }} />
        </div>

        {/* Mobile toggle button */}
        <button
          className="navbar-toggler d-sm-none"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-2">

            {/* Products dropdown */}
            <li className="nav-item dropdown">
              <button
                className="btn btn-light dropdown-toggle"
                id="productsDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                🛒 Products
              </button>
              <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                <li><NavLink className="dropdown-item" to="/products/eggs">Eggs</NavLink></li>
                <li><NavLink className="dropdown-item" to="/products/pharmacy">Pharmacy</NavLink></li>
                <li><NavLink className="dropdown-item" to="/products/petcare">Pet Care</NavLink></li>
                <li><NavLink className="dropdown-item" to="/products/drinks">Drinks</NavLink></li>
                <li><NavLink className="dropdown-item" to="/products/candies">Candies</NavLink></li>
              </ul>
            </li>

            {/* Static Links */}
            <li><NavLink to="/About" className="nav-link text-dark">About</NavLink></li>
            <li><NavLink to="/Services" className="nav-link text-dark">Services</NavLink></li>
            <li><NavLink to="/Contact" className="nav-link text-dark">Contact</NavLink></li>

            {/* Login icon */}
            <li><NavLink to="/Login" className="nav-link text-dark"><i className="bi bi-person-fill"></i></NavLink></li>

            {/* Cart button */}
            <li>
              <NavLink to="/Cart" className="nav-link text-decoration-none">
                <button className="btn d-flex align-items-center text-white px-3 py-2" style={{ backgroundColor: 'green', borderRadius: '12px' }}>
                  <FaShoppingCart className="me-1" />
                  <div className="fw-bold">{cartItems.length}</div>
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;