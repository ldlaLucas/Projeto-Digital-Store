import React from 'react';
import './styles.css';
import Layout from '../../components/Layout/Layout';
import { useLocation, useNavigate } from 'react-router-dom';

const BuyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return (
      <Layout>
        <div className="buy-page">
          <h1>Produto não encontrado</h1>
          <button onClick={() => navigate(-1)} className="back-button">
            Página anterior
          </button>
        </div>
      </Layout>
    );
  }

  const handleConfirmPurchase = () => {
    navigate('/buy-success');
  };

  return (
    <Layout>
      <div className="buy-page">
        <h1>Confirmação de Compra</h1>
        <div className="product-summary">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-details">
            <h2>{product.name}</h2>
            <p>Referência: {product.reference}</p>
            <p>Preço: R${product.price}</p>
            {product.priceDiscount && <p>Preço com Desconto: R${product.priceDiscount}</p>}
          </div>
        </div>
        <button onClick={handleConfirmPurchase} className="button-bp confirm-button">Confirmar Compra</button>
      </div>
    </Layout>
  );
};

export default BuyPage;
