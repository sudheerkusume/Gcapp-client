import React from 'react';
import SendEnquiry from './SendEnquiry';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container py-5">
        <div className="row text-center mb-4">
          <div className="col-12">
            <h1 className="fw-bold mb-3">We'd love to hear from you!</h1>
            <p className="text-muted fs-5">Have questions or feedback? Reach out – we're here to help!</p>
          </div>
        </div>

        <div className="row align-items-center g-4">
          {/* Contact Form */}
          <div className="col-12 col-md-6">
            <SendEnquiry />
          </div>

          {/* Image / Background side */}
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className="bgimage w-100 rounded-3" style={{ minHeight: '300px' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;