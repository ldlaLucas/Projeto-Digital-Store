import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import ProductViewPage from '../pages/ProductViewPage/ProductViewPage';
import OrdersPage from  '../pages/OrdersPage/OrdersPage';
import ProductListingPage from '../pages/ProductListingPage/ProductListingPage';
import "./styles.css";

const NotFound = () => {
  const navigate = useNavigate();

  return(
    <div className='NotFound'>
      <h1>404 PAGINA NÃO ENCONTRADA</h1>
      <p>A pagina que esta procurando nao existe, contate o suporte ou volte para a pagina inicial no botao a baixo.</p>
      <button className="NotFoundButton"
      onClick={()=>navigate('/')}
      onMouseEnter={(e) => (e.target.style.backgroundColor = "var(--dark-gray-2)")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "var(--primary)")}
      >
        Voltar para Home
      </button>
    </div>
  )
}

const Paths = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductViewPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/productsCart" element={<OrdersPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Paths;
