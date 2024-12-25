import React from "react";
import "./styles.css";
import Layout from "../../components/Layout/Layout";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import ProductOptions from "../../components/ProductOptions/ProductOptions";
import BuyBox from "../../components/BuyBox/BuyBox";
import { useNavigate, useParams } from "react-router-dom";
import products from '../../components/ProductData/ProductData';

const ProductViewPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <Layout>
        <div className="product-view-page">
          <h1>Produto não encontrado</h1>
          <button onClick={() => navigate(-1)} className="back-button">Página anterior</button>
        </div>
      </Layout>
    );
  }

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <div className="product-view-page">
        <ProductDetails product={product} />
        {product.options && <ProductOptions options={product.options} />}
        <BuyBox price={product.price} priceDiscount={product.priceDiscount} />
        <button onClick={handleBackClick} className="back-button">Página anterior</button>
      </div>
    </Layout>
  );
};

export default ProductViewPage;
