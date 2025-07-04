import React from 'react'

const PaymentPage = () => {
  return (
     <div className="container py-5">
      <div className="text-center">
        <h2 className="fw-bold mb-4">Secure Payment</h2>
        <p className="text-muted">This is where you'd handle payment integration like Razorpay, Stripe, etc.</p>

        {/* Placeholder form */}
        <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: '400px' }}>
          <form>
            <div className="mb-3">
              <label className="form-label">Card Number</label>
              <input type="text" className="form-control" placeholder="1234 5678 9012 3456" />
            </div>
            <div className="mb-3 d-flex gap-2">
              <div>
                <label className="form-label">Expiry</label>
                <input type="text" className="form-control" placeholder="MM/YY" />
              </div>
              <div>
                <label className="form-label">CVV</label>
                <input type="password" className="form-control" placeholder="123" />
              </div>
            </div>
            <button type="submit" className="btn btn-success w-100">Pay Now</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage