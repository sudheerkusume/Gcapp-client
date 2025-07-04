import axios from "axios";
import { createContext, useContext, useState } from "react";
import { loginStatus } from '../../App'; // 👈 import context

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [token] = useContext(loginStatus); // 👈 get token

  const addToCart = async (item) => {
    const existing = cartItems.find((i) => i.id === item.id);
    let updatedCart;

    if (existing) {
      updatedCart = cartItems.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      updatedCart = [...cartItems, { ...item, quantity: 1 }];
    }

    setCartItems(updatedCart);

    try {
      await axios.post(
        "https://gcapp-server.onrender.com/cart",
        { items: updatedCart }, // 👈 use key "items" not "cartItems"
        {
          headers: {
            "x-token": token, // ✅ Send token
          },
        }
      );
    } catch (error) {
      console.error("Failed to sync cart:", error);
    }
  };

  const removeFromCart = async (item) => {
    const updatedCart = cartItems.filter((apple) => apple !== item);
    setCartItems(updatedCart);

    try {
      await axios.post(
        "https://gcapp-server.onrender.com/cart",
        { items: updatedCart },
        {
          headers: {
            "x-token": token, // ✅ Send token here too
          },
        }
      );
    } catch (error) {
      console.error("Failed to sync cart:", error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

