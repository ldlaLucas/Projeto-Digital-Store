import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import { useCart } from "../ShoppingCart/ShoppingCart";

const BuyBox = ({ id, image, name, price, priceDiscount }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product = { id, image, name, price, priceDiscount };
    addToCart(product);
  };

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
      <div  className="Button-container">
      <button onClick={handleAddToCart} className="Cart-button">Adicionar ao Carrinho</button>
      </div>
    </div>
  );
};

BuyBox.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceDiscount: PropTypes.number,
};

export default BuyBox;
