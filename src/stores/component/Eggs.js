import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/cartContext';
import './Eggs.css'; // import the CSS below

const Eggs = () => {
  const [Products, setProducts] = useState([]);
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get("https://gcapp-server.onrender.com/Eggs")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const scroll = (direction) => {
    const scrollAmount = 1000;
    scrollRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
  };

  return (
    <div className='container-fluid py-4 px-3 position-relative'>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h4 className="mb-0 text-dark">Dairy, Bread & Eggs</h4>
        <span className="text-success" style={{ cursor: 'pointer' }} onClick={() => navigate(`/Eggs`)}>see all</span>
      </div>

      {/* Scroll Buttons */}
      <button className="btn btn-light position-absolute top-50 start-0 translate-middle-y d-none d-md-block"
        onClick={() => scroll('left')} style={{ zIndex: 1 }}>
        <FaChevronLeft />
      </button>
      <button className="btn btn-light position-absolute top-50 end-0 translate-middle-y d-none d-md-block"
        onClick={() => scroll('right')} style={{ zIndex: 1 }}>
        <FaChevronRight />
      </button>

      {/* Horizontal Scrollable Row */}
      <div className="d-flex overflow-auto gap-3 pb-2 scroll-container" ref={scrollRef}
        style={{ scrollBehavior: 'smooth', padding: '10px 0' }}>
        {Products.map((product) => (
          <Link
            to={`/Eggs/${product._id}`}
            key={product._id}
            className="text-decoration-none text-dark"
            style={{ minWidth: '160px' }}
          >
            <div className="card egg-card h-100">
              <div className="egg-image-wrapper">
                <img
                  className="card-img-top"
                  src={Array.isArray(product.image) ? product.image[0] : product.image}
                  alt={product.title}
                />
              </div>

              <div className="card-body p-2 d-flex flex-column">
                <h6 className="card-title text-truncate mb-1" style={{ fontSize: '15px', fontWeight: '500' }}>
                  {product.title}
                </h6>
                <p className="text-muted mb-1" style={{ fontSize: '13px' }}>{product.Size}</p>
                <p className="card-text mb-2"><strong>₹</strong>{product.Offer}</p>
                <button className="btn btn-outline-success btn-sm mt-auto"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCart(product);
                  }}
                >
                  ADD
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Eggs;