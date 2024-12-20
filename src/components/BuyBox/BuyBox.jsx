import React from 'react';
import './styles.css';

const BuyBox = ({ price, priceDiscount }) => {
  return (
    <div className="buy-box">
      {priceDiscount ? (
        <>
          <p className="price original">R${price}</p>
          <p className="price discount">R${priceDiscount}</p>
        </>
      ) : (
        <p className="price">R${price}</p>
      )}
      <button type="button">Adicionar ao Carrinho</button>
    </div>
  );
};

export default BuyBox;
