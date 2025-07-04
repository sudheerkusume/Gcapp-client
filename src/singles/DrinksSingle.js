import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../stores/context/cartContext';
import { Link, useParams } from 'react-router-dom';
import { Clock } from "lucide-react";
import DeliveryBoy from '../stores/Accets/DeliveryBoy.png';
import Offer from '../stores/Accets/Offers.png'
import Basket from '../stores/Accets/Basket.png'
const DrinksSingle = () => {
  const { id } = useParams();
  const {addToCart, cartItems} = useCart()
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(1);
  useEffect(() => {
    axios.get(`https://gcapp-server.onrender.com/Drinks/${id}`)
      .then((res) => 
{
          setProduct(res.data);
      setSelectedImage(res.data.image?.[0])
}    
    )
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

    const unitOptions = [
    { label: product.Unit, quantity: 1, price: product.Offer },
    { label: `2 x ${product.Unit}`, quantity: 2, price: 67, originalPrice: 70 },
    { label: `3 x ${product.Unit}`, quantity: 3, price: 95, originalPrice: 105, discount: '9% OFF' },
  ];

 console.log(id);
 
  return (
    <div className="container">
  <div className="row">
    <div className="col-md-7 scrollable" >
      {/* Selected main image */}
<img
  className="img-fluid border rounded mb-3"
  src={selectedImage}
  alt="Selected"
  style={{
    width: '80%',
    maxHeight: '300px',
    border:'none',
    objectFit: 'contain',
    minHeight: '300px' // ensures small images still take up space
  }}
/>
      {/* Scrollable thumbnails */}
      <div className=" d-flex overflow-auto gap-2 ">
        {product.image?.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumb ${index}`}
            className={`rounded border ${selectedImage === img ? 'border-success' : ''}`}
            onClick={() => setSelectedImage(img)}
            style={{
              height: '80px',
              width: '80px',
              objectFit: 'cover',
              cursor: 'pointer',
              padding: '4px'
            }}
          />
        ))}
      </div>
     
     <h3 className='p-3'>Product Details</h3>
     <p className='p-1' style={{font:'bold'}}> Key Features</p>
     <p style={{color:'gray', fontWeight:'lighter', fontSize:'smaller'}}>{product.Features}<br/>{product.Features1}<br/>{product.Features2}</p>
      
     <p className='' style={{font:'bold'}}> Flavour</p>
     <p style={{color:'gray', fontWeight:'lighter', fontSize:'smaller'}}>{product.Flavour}</p>

     <p className='' style={{font:'bold'}}>Shelf Life</p>
     <p style={{color:'gray', fontWeight:'lighter', fontSize:'smaller'}}>{product.ShelfLife}</p>
    
    <p className='' style={{font:'bold'}}>Return Policy</p>
     <p style={{color:'gray', fontWeight:'lighter', fontSize:'smaller'}}>
      This Item is non-returnable. For a damaged, defective, incorrect or expired item, you can request a replacement within 72 hours of delivery.
      In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.
     </p>

     <p className='' style={{font:'bold'}}>Unit</p>
     <p style={{color:'gray', fontWeight:'lighter', fontSize:'smaller'}}>{product.Unit}</p>

     <p className='' style={{font:'bold'}}>Country of Origin</p>
     <p style={{color:'gray', fontWeight:'lighter', fontSize:'smaller'}}>India</p>

     <p className='' style={{font:'bold'}}>Customer Care Details</p>
     <p style={{color:'gray', fontWeight:'lighter', fontSize:'smaller'}}>Email: info@morein.com</p>

     <p className='' style={{font:'bold'}}>Seller</p>
     <p style={{color:'gray', fontWeight:'lighter', fontSize:'smaller'}}>{product.seller}</p>

     <p className='' style={{font:'bold'}}>Seller FSSAI</p>
     <p style={{color:'gray', fontWeight:'lighter', fontSize:'smaller'}}>{product.seller_FSSAI}</p>

     <p className='' style={{font:'bold'}}>Description</p>
     <p style={{color:'gray', fontWeight:'lighter', fontSize:'smaller'}}>{product.Description}</p>

     <p className='' style={{font:'bold'}}>Disclaimer</p>
     <p style={{color:'gray', fontWeight:'lighter', fontSize:'smaller'}}>{product.Disclaimer}</p>

    </div>

    <div className="col-md-4">
      <h4>{product.title}</h4>
       <Clock size={10} className="text-muted-foreground " />
         <i class="fas fa-clock ps-1" style={{fontSize:'11px'}}>9 Mins</i> 

       <Link to={`/Drinks`} className='link-style'>  <h6 className='p-2 text-success mb-lg-5' style={{fontWeight:'smaller'}}>View all by {product.Product} <span className='itspan'>➤</span></h6></Link>
       <div class="price-box ">
          <div>{product.Unit}</div>
          <div class="price">MRP ₹{product.Offer}</div>
      </div>
      <p className='p-2' style={{fontSize:'smaller',fontWeight:'lighter', color:'gray'}}>(Inclusive of all taxes)</p>
      <button className="btn btn-warning" onClick={() => addToCart(product)}>Add to cart</button>
      <div className='pb-3'>
        <h5 className='p-5'>
          Why shop from moreIn
        </h5>
        <div className='row'>
          <div className='col-lg-4'>
                <img className='w-50' src={DeliveryBoy} alt='error'></img>
          </div>
          <div className='col-lg-8'>
            <h6 style={{letterSpacing:'1px'}}>Superfast Delivery</h6>
            <p style={{color:'gray', fontWeight:''}} className='Delivery'>
              Get your order delivered to your doorstep at the earliest from dark store near you
            </p>
          </div>
          <div className='col-lg-4'>
                <img className='w-50' src={Offer} alt='error'></img>
          </div>
          <div className='col-lg-8'>
            <h6 style={{letterSpacing:'1px'}}>Best Prices & Offers</h6>
            <p style={{color:'gray', fontWeight:''}} className='Delivery'>
              Best price Destination with offers directly from the manufacturers.
            </p>
          </div>
          <div className='col-lg-4'>
                <img className='w-50' src={Basket} alt='error'></img>
          </div>
          <div className='col-lg-8'>
            <h6 style={{letterSpacing:'1px'}}>Wide Assortment</h6>
            <p style={{color:'gray', fontWeight:''}} className='Delivery'>
              Choose from 1000+ products across food, personal care, household & other categories.
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
  );
};
export default DrinksSingle;