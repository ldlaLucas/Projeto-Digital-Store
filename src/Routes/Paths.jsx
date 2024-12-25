import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import ProductViewPage from '../pages/ProductViewPage/ProductViewPage';
import ProductListingPage from '../pages/ProductListingPage/ProductListingPage';
import OrdersPage from '../pages/OrdersPage/OrdersPage';
import CategoryPage from '../pages/CategoryPage/CategoryPage';
import NotFound from '../pages/NotFound/NotFound';
import './styles.css';
import BuyPage from '../pages/BuyPage/BuyPage';
import BuySuccess from '../pages/BuyPage/BuySuccess';

const Paths = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductViewPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/buy-success" element={<BuySuccess />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Paths;
