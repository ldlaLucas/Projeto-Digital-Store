import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import ProductViewPage from "../pages/ProductViewPage/ProductViewPage";
import OrdersPage from "../pages/OrdersPage/OrdersPage";
import ProductListingPage from "../pages/ProductListingPage/ProductListingPage";
import "./styles.css";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import NotFound from "../pages/NotFound/NotFound";

const Paths = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductViewPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/productsCart" element={<OrdersPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Paths;
