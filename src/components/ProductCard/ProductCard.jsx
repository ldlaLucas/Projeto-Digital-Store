import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ id, image, name, price, priceDiscount }) => {
  const navigate = useNavigate();

  const handleCardClick  = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
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
    </div>
  );
};

export default ProductCard;
