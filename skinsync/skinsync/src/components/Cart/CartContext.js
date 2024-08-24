import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem('id');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const fetchCart = async () => {
    if (!userId) return;

    try {
      const response = await axios.get(`http://localhost:5000/cart/get/${userId}`);
      setCart(response.data.items || []);
    } catch (error) {
      console.error('Failed to fetch cart:', error.response || error.message);
    }
  };

  const addToCart = async (product) => {
    if (!userId) return;

    try {
      await axios.post('http://localhost:5000/cart/add', {
        userId,
        productId: product._id,
        quantity: 1,
      });
      fetchCart(); // Refresh cart after addition
    } catch (error) {
      console.error('Failed to add item to cart:', error);
    }
  };

  const removeFromCart = async (productId) => {
    if (!userId) return;

    try {
      await axios.delete(`http://localhost:5000/cart/remove/${userId}/${productId}`);
      fetchCart(); // Refresh cart after removal
    } catch (error) {
      console.error('Failed to remove item from cart:', error);
    }
  };

  const updateCartItemQuantity = async (productId, quantity) => {
    if (!userId || quantity < 1) return;

    try {
      await axios.put('http://localhost:5000/cart/update', {
        userId,
        productId,
        quantity,
      });
      fetchCart(); // Refresh cart after update
    } catch (error) {
      console.error('Failed to update item quantity:', error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchCart();
    }
  }, [userId]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
