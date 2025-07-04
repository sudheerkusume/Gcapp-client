import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  FaTruck, FaTag, FaHeadset, FaShoppingBasket, FaLock,
  FaUndo, FaShieldAlt, FaBolt, FaGift, FaMapMarkedAlt, FaLeaf
} from 'react-icons/fa';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Services = () => {
  const [products, setProducts] = useState([]);
  const [displayedCount, setDisplayedCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const iconMap = {
    "Wide Product Range": <FaShoppingBasket size={40} className="text-success" />,
    "Fast Delivery": <FaTruck size={40} className="text-success" />,
    "Best Prices & Offers": <FaTag size={40} className="text-success" />,
    "Customer Support": <FaHeadset size={40} className="text-success" />,
    "Secure Payments": <FaLock size={40} className="text-warning" />,
    "Easy Returns": <FaUndo size={40} className="text-danger" />,
    "Trusted Brands": <FaShieldAlt size={40} className="text-secondary" />,
    "Daily Deals": <FaBolt size={40} className="text-warning" />,
    "Loyalty Rewards": <FaGift size={40} className="text-pink-500" />,
    "Track Orders": <FaMapMarkedAlt size={40} className="text-info" />,
    "Eco-Friendly Packaging": <FaLeaf size={40} className="text-success" />,
    "Premium Subscription Packs": <FaGift size={40} className="text-primary" />,
    "Home Essentials": <FaShoppingBasket size={40} className="text-success" />
  };

  useEffect(() => {
    axios.get("https://gcapp-server.onrender.com/Services")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Live counting effect
  useEffect(() => {
    if (products.length > 0) {
      let count = 0;
      const interval = setInterval(() => {
        count++;
        setDisplayedCount(count);
        if (count >= products.length) {
          clearInterval(interval);
        }
      }, 100); // 100ms per increment
    }
  }, [products]);

  const handleCardClick = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
    <div className="ServicesPage container py-5">
      {/* Title with live count */}
      <div className="text-center mb-4">
        <h1 className="fw-bold d-inline-block me-2">Our Services</h1>
        <span className="badge bg-success fs-5" style={{ transition: '0.5s' }}>
          {displayedCount}+
        </span>
      </div>

      {/* Service Cards */}
      <div className="row g-4">
        {products.map((service, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div
              className="border rounded p-4 h-100 text-center shadow-sm cursor-pointer"
              style={{ cursor: 'pointer' }}
              onClick={() => handleCardClick(service)}
            >
              <div className="mb-3">
                {iconMap[service.name] || <FaShoppingBasket size={40} className="text-success" />}
              </div>
              <h5 className="fw-bold mb-2">{service.name}</h5>
              <p className="text-muted">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedService?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center mb-3">
            {iconMap[selectedService?.name] || <FaShoppingBasket size={40} className="text-success" />}
          </div>
          <p>{selectedService?.description}</p>
          <p className="text-success">{selectedService?.text}</p>

          {selectedService?.video?.includes(".mp4") ? (
            <video className="w-100" muted autoPlay loop style={{ borderRadius: 20 }}>
              <source src={selectedService.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : selectedService?.video ? (
            <a href={selectedService.video} target="_blank" rel="noopener noreferrer">
              Watch Video
            </a>
          ) : null}

          {selectedService?.details && <p>{selectedService.details}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Services;