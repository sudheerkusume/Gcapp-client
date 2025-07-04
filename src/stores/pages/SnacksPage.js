import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const SnacksPage = () => {
        const [products, setProducts] = useState([]);
        const [selectedProducts, setSelectedProducts] = useState([])


    useEffect(() => {
        axios.get(`https://gcapp-server.onrender.com/Snacks`)
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err))
    },[]);

     const uniqueProducts = [...new Set(products.map((item) => item.Product))];

     const handleFilterChange = (productName) => {
    if (selectedProducts.includes(productName)) {
      setSelectedProducts(selectedProducts.filter(item => item !== productName));
    } else {
      setSelectedProducts([...selectedProducts, productName]);
    }
  };

   const filteredProducts = selectedProducts.length > 0
    ? products.filter(item => selectedProducts.includes(item.Product))
    : products;


  return (
    <div className="container-fluid">
  <div className="row">
    {/* Filter Section */}
    <div className="col-lg-3">
      <div style={{
  position: 'sticky',
  top: '80px',
  zIndex: 1000,
  background: '#fff',
  padding: '10px',
  borderRadius: '5px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'

      }}>
      <h5>Filter by Product</h5>
      {uniqueProducts.map((product, index) => (
        <div key={index}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input
              type="checkbox"
              checked={selectedProducts.includes(product)}
              onChange={() => handleFilterChange(product)}
            />
            <span>{product}</span>
          </label>
        </div>
      ))}
      </div>
    </div>

    {/* Product Section */}
        <div className="col-lg-9  col-sm-12 pt-lg-5">
      <h2>Products</h2>
      <div className="row">
        {filteredProducts.map((item) => (
          <div key={item._id} className=" col-4 col-md-4 col-lg-3 mb-4">
            <Link to={`/Snacks/${item._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="card h-100">
                <img className="card-img-top p-2" src={item.image} alt="error" />
                <div className="card-body">
                  <h6 className="card-title text-truncate" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {item.title}
                  </h6>
                  <p className="text-success"><strong>Price:</strong> {item.Offer}</p>
                  <p>Size: {item.Size}</p>
                  <button className="btn btn-warning btn-sm">Buy Now</button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>

  </div>
</div>
  )
}

export default SnacksPage;