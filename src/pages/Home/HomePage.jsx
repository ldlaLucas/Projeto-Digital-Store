import React from "react";
import "./styles.css";
import Layout from "../../components/Layout/Layout";
import Gallery from "../../components/Gallery/Gallery";
import Section from "../../components/Section/Section";
import ProductListing from "../../components/ProductListing/ProductListing";
import products from "../../components/ProductData/ProductData";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/categories?category=${category}`);
  }

  return (
    <Layout>
      <Gallery
        images={[
          { src: "public/home-slide-1.jpeg" },
          { src: "public/home-slide-2.jpeg" },
          { src: "public/home-slide-3.jpeg" }
        ]}
        width="1440px"
        height="681px"
      />
      <Section title="Coleções em destaque" titleAlign="center">
        <img src="public/collection-1.png" alt="Coleção 1" />
        <img src="public/collection-2.png" alt="Coleção 2" />
        <img src="public/collection-3.png" alt="Coleção 3" />
      </Section>
      {/* Seção: Categorias em destaque */}
      <Section title="Coleção em Destaque" className="sectionCategory">
        <div className="collection-category">
          <img
            src="../src/assets/categoryIcons/Frame-10.svg"
            className="collection-image category"
            onClick={() => handleCategoryClick("camisas")}
            alt="Camisas"
          />
          <img
            src="../src/assets/categoryIcons/Frame-11.svg"
            className="collection-image category"
            onClick={() => handleCategoryClick("calcas")}
            alt="Calças"
          />
          <img
            src="../src/assets/categoryIcons/Frame-12.svg"
            className="collection-image category"
            onClick={() => handleCategoryClick("bones")}
            alt="Bonés"
          />
          <img
            src="../src/assets/categoryIcons/Frame-13.svg"
            className="collection-image category"
            onClick={() => handleCategoryClick("headphones")}
            alt="Headphones"
          />
          <img
            src="../src/assets/categoryIcons/Frame-14.svg"
            className="collection-image category"
            onClick={() => handleCategoryClick("tenis")}
            alt="Tênis"
          />
        </div>
      </Section>
      <Section title="Produtos em alta" titleAlign="left">
        <ProductListing
          products={products.slice(0,8)}
        />
      </Section>
    </Layout>
  );
};

export default HomePage;
