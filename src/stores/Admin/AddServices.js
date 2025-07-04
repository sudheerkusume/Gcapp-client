import axios from 'axios'
import React, { useState } from 'react'
const AddService = () => {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState("");
  const [text, setText] = useState("");


  const submitHandler = (e) => {
    e.preventDefault();
    axios.post(`https://gcapp-server.onrender.com/Services`, { name, description, text, video })
      .then(() => {
        alert("Service added to MoreIn!");

        setName("");
        setDescription("");
        setText("");
        setVideo("")
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-4">
      <h4 className='mb-4'>Add MoreIn Services</h4>
      <form onSubmit={submitHandler}>
        <h6>Service Name</h6>
        {/* <input
          name='name'
          placeholder='e.g., Fast Delivery, Customer Support'
          className='form-control mb-3'
          onChange={(e) => setName(e.target.value)}
        />
        <small className="text-muted mb-3 d-block">
          Valid icon names: <strong>Fast Delivery</strong>, <strong>Customer Support</strong>, <strong>Best Prices & Offers</strong>, <strong>Wide Product Range</strong>
        </small> */}
<select
  name='name'
  className='form-control mb-3'
  onChange={(e) => setName(e.target.value)}
  value={name}
  required
>
  <option value="" disabled>Select a Service</option>
  <option value="Fast Delivery">Fast Delivery</option>
  <option value="Customer Support">Customer Support</option>
  <option value="Best Prices & Offers">Best Prices & Offers</option>
  <option value="Wide Product Range">Wide Product Range</option>
  <option value="Secure Payments">Secure Payments</option>
  <option value="Easy Returns">Easy Returns</option>
  <option value="Trusted Brands">Trusted Brand</option>
  <option value="Daily Deals">Daily Deals</option>
  <option value="Loyalty Rewards">Loyalty Rewards</option>
  <option value="Track Orders">Track Orders</option>
  <option value="Eco-Friendly Packaging">Eco-Friendly Packaging</option>
</select>
        <h6>Description</h6>
        <input
          name='description'
          placeholder='Short description'
          className='form-control mb-3'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        />

        <h6>Video Clip</h6>
        <input
          name='video'
          placeholder='video clip here'
          className='form-control mb-3'
          onChange={(e) => setVideo(e.target.value)}
          value={video}
          required
        />

        <h6>Highlight Text</h6>
        <input
          name='text'
          placeholder='Tagline or Feature Text'
          className='form-control mb-3'
          onChange={(e) => setText(e.target.value)}
          value={text}
          required
        />

        <input type='submit' className='form-control btn btn-primary' value="Add Service" />
      </form>
    </div>
  )
}

export default AddService;