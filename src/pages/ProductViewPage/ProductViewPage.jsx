import React from "react";
import "./styles.css";
import Layout from "../../components/Layout/Layout";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import ProductOptions from "../../components/ProductOptions/ProductOptions";
import BuyBox from "../../components/BuyBox/BuyBox";
import { useNavigate } from "react-router-dom";

const ProductViewPage = () => {
  const navigate = useNavigate();

  const product = {
    name: "Produto Exemplo",
    image: "public/product-example.png",
    description: "Descrição detalhada do produto exemplo.",
    price: 299.9,
    priceDiscount: 249.9,
    options: [
      { name: "Cor", values: ["Vermelho", "Azul", "Verde"] },
      { name: "Tamanho", values: ["P", "M", "G"] },
    ],
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <div className="product-view-page">
        <ProductDetails product={product} />
        <ProductOptions options={product.options} />
        <BuyBox price={product.price} priceDiscount={product.priceDiscount} />
        <button onClick={handleBackClick} className="back-button"> Pagina anterior </button>
      </div>
    </Layout>
  );
};

export default ProductViewPage;
