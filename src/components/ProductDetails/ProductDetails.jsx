import React from 'react';
import './styles.css';

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
