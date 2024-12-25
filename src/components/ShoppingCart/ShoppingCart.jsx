import React, { createContext, useState, useContext } from 'react';

const ShoppingCartContext = createContext();

export const useCart = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <ShoppingCartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
