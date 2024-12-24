import React, { createContext, useState, useContext } from "react";

const ShoppingCartContext = createContext();

// Função que usa o contexto do carrinho de compras
export const useCart = () => useContext(ShoppingCartContext);

// Provedor do contexto do carrinho de compras
export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Função para adicionar itens ao carrinho
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Função para remover itens do carrinho
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, addToCart, removeFromCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
