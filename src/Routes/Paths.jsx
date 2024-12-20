import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import ProductViewPage from '../pages/ProductViewPage/ProductViewPage';
import ProductListingPage from '../pages/ProductListingPage/ProductListingPage';

const Paths = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductViewPage />} />
        <Route path="/products" element={<ProductListingPage />} />
      </Routes>
    </Router>
  );
};

export default Paths;
