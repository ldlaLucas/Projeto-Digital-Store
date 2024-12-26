import React from "react";
import "./styles.css";
import Layout from "../../components/Layout/Layout";
import ProductDetails from "../../components/ProductDetails/ProductDetails"; // Importar o componente ProductDetails
import ProductOptions from "../../components/ProductOptions/ProductOptions";
import BuyBox from "../../components/BuyBox/BuyBox";
import { useNavigate, useParams } from "react-router-dom";
import products from "../../components/ProductData/ProductData";
import ProductListing from "../../components/ProductListing/ProductListing"; // Importar o componente ProductListing

const ProductViewPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <Layout>
        <div className="product-view-page">
          <h1>Produto não encontrado</h1>
          <button onClick={() => navigate(-1)} className="back-button">
            Página anterior
          </button>
        </div>
      </Layout>
    );
  }

  const handleBuyClick = () => {
    navigate('/buy', { state: { product } });
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <div className="product-view-page">
        <div className="main-content">
          {/* Galeria de Imagens */}
          <div className="gallery">
            <img src={product.image} alt={product.name} className="main-image" />
            <div className="thumbnails">
              {/* Adicionar miniaturas de imagens aqui */}
              <img src={product.image} alt={product.name} className="thumbnail" />
              <img src={product.image} alt={product.name} className="thumbnail" />
              <img src={product.image} alt={product.name} className="thumbnail" />
            </div>
          </div>
          {/* BuyBox */}
          <div className="buy-box">
            <h1>{product.name}</h1>
            <p>Referência: {product.reference}</p>
            <div className="rating">
              {/* Adicionar estrelas e avaliação aqui */}
              <span>{product.stars} estrelas</span>
              <span>({product.rating} avaliações)</span>
            </div>
            <div className="price">
              {product.priceDiscount && <p className="price-discount">R${product.priceDiscount}</p>}
              <p className="price-original">R${product.price}</p>
            </div>
            <p>{product.description}</p>
            {product.options && <ProductOptions options={product.options} />} {/* Verificar se options está definido */}
            <BuyBox id={product.id} name={product.name} image={product.image} price={product.price} priceDiscount={product.priceDiscount} /> {/* Passar a prop name corretamente */}
            <button onClick={handleBuyClick} className="button buy-button">COMPRAR</button>
          </div>
        </div>
        {/* Detalhes do Produto */}
        <ProductDetails product={product} /> {/* Utilizar o componente ProductDetails */}
        {/* Seção de Produtos Relacionados */}
        <div className="related-products">
          <h2>Produtos Relacionados</h2>
          <ProductListing products={products.slice(0, 4)} /> {/* Exibir os primeiros 4 produtos como relacionados */}
        </div>
        <button onClick={handleBackClick} className="back-button">
          Página anterior
        </button>
      </div>
    </Layout>
  );
};

export default ProductViewPage;
