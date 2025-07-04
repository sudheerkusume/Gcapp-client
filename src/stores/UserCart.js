import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { loginStatus } from "../App";
import { useNavigate } from "react-router-dom";

const UserCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [token, setToken] = useContext(loginStatus);
  const [fuser, setFuser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate("/Login");
  }, [token, navigate]);

  useEffect(() => {
    const fetchUserAndCart = async () => {
      try {
        const resUser = await axios.get("https://gcapp-server.onrender.com/fuser", {
          headers: { "x-token": token },
        });
        setFuser(resUser.data);

        const resCart = await axios.get("https://gcapp-server.onrender.com/mycart", {
          headers: { "x-token": token },
        });

        const data = resCart.data;
        setCartItems(Array.isArray(data.items) ? data.items : []);
      } catch (err) {
        console.error("Cart/User Fetch Error:", err);
        if (err.response?.status === 401 || err.response?.status === 400) {
          setToken("");
        }
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchUserAndCart();
  }, [token, setToken]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 1500); // 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  const deleteItem = async (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);

    try {
      await axios.post("http://localhost:3001/Cart", { items: updatedCart }, {
        headers: { "x-token": token },
      });
    } catch (error) {
      console.error("Failed to update cart:", error);
    }
  };

  const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.Offer * (item.quantity || 1),
    0
  );

   const handleProceedToCheckout = () => {
    navigate("/order", { state: { cartItems, user: fuser } }); // send data to Order page
  };

  return (
    <div className="container my-5">
      <style>{`
        .fade-text {
          transition: opacity 0.8s ease-in-out;
        }
      `}</style>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">🛒 My Cart</h2>
        {fuser && (
          <button className="btn btn-outline-danger" onClick={() => setToken("")}>
            Logout
          </button>
        )}
      </div>

      {/* Animated Welcome Section */}
      {fuser && (
        <div className="card mb-4 shadow-sm">
          <div className="card-body d-flex align-items-center">
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(fuser.name || "User")}&background=0D8ABC&color=fff`}
              alt="User Avatar"
              className="rounded-circle me-3"
              style={{ width: "50px", height: "50px" }}
            />
            <div>
              <h5 className="card-title mb-0 fade-text">
                {showWelcome
                  ? `Hello, ${fuser.name || "User"} 👋`
                  : `Welcome back, ${fuser.name || "User"}`}
              </h5>
              <p className="card-text text-muted small">Your personalized cart</p>
            </div>
          </div>
        </div>
      )}

      {/* Cart Items or Spinner */}
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status"></div>
        </div>
      ) : cartItems.length === 0 ? (
        <div className="alert alert-info text-center">Your cart is empty.</div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id || `${item.Product}-${Math.random()}`} className="card mb-3 shadow-sm">
              <div className="row g-0">
                <div className="col-md-3 d-flex align-items-center justify-content-center p-3">
                  <img
                    src={item.image}
                    alt={item.Product}
                    className="img-fluid rounded"
                    style={{ maxHeight: "100px" }}
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">{item.Product}</h5>
                    <p className="card-text mb-1"><strong>Size:</strong> {item.Size}</p>
                    <p className="card-text mb-1 text-success">
                      <strong>Price:</strong> ₹{item.Offer}
                    </p>
                    <p className="card-text mb-1"><strong>Qty:</strong> {item.quantity || 1}</p>
                  </div>
                </div>
                <div className="col-md-3 d-flex flex-column justify-content-center align-items-end p-3">
                  <h5 className="text-dark mb-3">₹{item.Offer * (item.quantity || 1)}</h5>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => deleteItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Cart Totals */}
          <div className="card p-4 mt-4 shadow-sm">
            <div className="d-flex justify-content-between mb-2">
              <span className="fw-semibold">Total Items:</span>
              <span>{totalItems}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="fw-bold">Total Price:</span>
              <span>₹{totalPrice}</span>
            </div>
            <button className="btn btn-primary mt-4 w-100" onClick={handleProceedToCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UserCart;