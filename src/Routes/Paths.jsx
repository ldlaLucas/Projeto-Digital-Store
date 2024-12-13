import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import HomePage from '../pages/HomePage';
import ProductListingPage from '../pages/ProductListingPage';
import ProductViewPage from '../pages/ProductViewPage';
// import MyOrdersPage from '../pages/MyOrdersPage';

const Paths = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produtos" element={<ProductListingPage />} />
          <Route path="/categorias" element={<ProductViewPage />} />
          {/* <Route path="/meus-pedidos" element={<MyOrdersPage />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default Paths;
