import React from 'react'

const Welcomes = () => {
  return (
    <div className="container p-4">
      <h2 className="text-center p-3">
        Welcome to <span className="text-warning">MoreIn</span> <span className="text-success">Admin Panel</span>
      </h2>

      <div className="welcomes">
        <h1 className="display-6 pt-4 mb-3">Manage with Confidence, Grow with Ease*</h1>
        <p>
          "At MoreIn, we empower you to control your digital storefront effortlessly. With robust tools for
          product management, intuitive UI, and real-time updates, managing your online business becomes
          streamlined and efficient."
        </p>
        <p>
          Whether you're adding new products, adjusting inventory, or tracking user actions, the MoreIn Admin
          Panel gives you the control you need to scale confidently.
        </p>
      </div>

      <div className="exit">
        <button className="btn btn-light text-success mb-4">
          <details>
            <summary>Learn more</summary>
            <p>
              <span className="text-warning">Admin Overview </span>
              <span className="text-dark">
                : This panel is your command center. Easily manage products, view customer carts, and ensure smooth
                operations—all from one place.
              </span>
            </p>
          </details>
        </button>
      </div>
    </div>
  )
}

export default Welcomes