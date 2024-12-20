import React from 'react';
import './styles.css';

const ProductCard = ({ image, name, price, priceDiscount }) => {
  return (
    <div className="product-card">
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
