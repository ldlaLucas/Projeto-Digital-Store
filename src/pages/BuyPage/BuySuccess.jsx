import React from 'react';
import './styles.css';
import Layout from '../../components/Layout/Layout';
import { useNavigate } from 'react-router-dom';

const BuySuccess = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <Layout>
      <div className="buy-success">
        <h1>Compra Confirmada!</h1>
        <p>Obrigado por sua compra. Seu pedido foi confirmado com sucesso.</p>
        <button onClick={handleBackToHome} className="button-bp home-button">Voltar para Home</button>
      </div>
    </Layout>
  );
};

export default BuySuccess;
