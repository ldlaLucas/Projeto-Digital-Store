import React from "react";
import './styles.css';
import Layout from "../../components/Layout/Layout";
import Gallery from "../../components/Gallery/Gallery";
import Section from "../../components/Section/Section";
import ProductListing from "../../components/ProductListing/ProductListing";

const HomePage = () => {
  return (
    <Layout>
      <Gallery
        images={[
          { src: "public/home-slide-1.jpeg" },
          { src: "public/home-slide-2.jpeg" },
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
          />
          <img
            src="../src/assets/categoryIcons/Frame-11.svg"
            className="collection-image category"
          />
          <img
            src="../src/assets/categoryIcons/Frame-12.svg"
            className="collection-image category"
          />
          <img
            src="../src/assets/categoryIcons/Frame-13.svg"
            className="collection-image category"
          />
          <img
            src="../src/assets/categoryIcons/Frame-14.svg"
            className="collection-image category"
          />
        </div>
      </Section>
      <Section title="Produtos em alta" titleAlign="left">
        <ProductListing
          products={[
            {
              name: "Produto 1",
              image: "public/product-thumb-1.jpeg",
              price: 200,
              priceDiscount: 149.9,
            },
            {
              name: "Produto 2",
              image: "public/product-thumb-2.jpeg",
              price: 49.9,
            },
          ]}
        />
      </Section>
    </Layout>
  );
};

export default HomePage;
