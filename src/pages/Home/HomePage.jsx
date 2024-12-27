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
  };

  return (
    <Layout>
      <div className="home-page">
        <Gallery
          images={[
            { src: "public/home-slide-1.jpeg" },
            { src: "public/home-slide-2.jpeg" },
            { src: "public/home-slide-3.jpeg" },
            { src: "public/home-slide-4.jpeg" },
          ]}
          width="1440px"
          height="681px"
        />

        <Section title="Coleções em destaque" titleAlign="left">
          <div className="collections-containers">
            <img src="public/collection-2.png" className="collection-image" />
            <img src="public/collection-3.png" className="collection-image" />
            <img src="public/collection-1.png" className="collection-image" />
          </div>
        </Section>

        <Section title="Coleção em Destaque" titleAlign="center">
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
        <Section
          title="Produtos em alta"
          titleAlign=""
          link={{ text: "Ver todos ->", href: "/products" }}
          className="PrtAlta-container"
        >
          <ProductListing products={products.slice(0, 8)} />
        </Section>
      </div>
    </Layout>
  );
};

export default HomePage;
