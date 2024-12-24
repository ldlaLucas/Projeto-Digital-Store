import React from "react";
import "./styles.css";
import { useCart } from "../ShoppingCart/ShoppingCart";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, image, name, price, priceDiscount }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // const handleCardClick  = () => {
  //   navigate(`/product/${id}`);
  // };
  const handleAddToCart = () => {
    const product = { id, image, name, price, priceDiscount };
    addToCart(product);
  };

  return (
    <div className="product-card" onClick={() => navigate(`/product/${id}`)}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {priceDiscount ? (
        <>
          <p className="price original">R${price}</p>
          <p className="price discount">R${priceDiscount}</p>
        </>
      ) : (
        <p className="price">R${price}</p>
      )}
      <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default ProductCard;
