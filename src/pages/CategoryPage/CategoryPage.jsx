import React from "react";
import "./styles.css";
import Layout from "../../components/Layout/Layout";
import Section from "../../components/Section/Section";
import { useNavigate } from "react-router-dom";
import products from "../../components/ProductData/ProductData";

const categories = [
  {
    name: "Camisetas",
    image: "../../../src/assets/categoryIcons/iconsPng/camisa.png",
  },
  {
    name: "Calças",
    image: "../../../src/assets/categoryIcons/iconsPng/calca.png",
  },
  {
    name: "Bonés",
    image: "../../../src/assets/categoryIcons/iconsPng/bone.png",
  },
  {
    name: "Headphones",
    image: "../../../src/assets/categoryIcons/iconsPng/headphone.png",
  },
  {
    name: "Tênis",
    image: "../../../src/assets/categoryIcons/iconsPng/tenis.png",
  },
];

const CategoryPage = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/categories/${category}`);
  };

  return (
    <Layout>
      <div className="category-page">
        <h1 className="category-title">Categorias</h1>
        <div className="section-container">
          {categories.map((category, index) => (
            <Section key={index} title={category.name} titleAlign="center">
              <div className="category-images">
                {products
                  .filter((product) => product.category === category.name)
                  .slice(0, 1)
                  .map((product) => (
                    <img
                      key={product.id}
                      src={category.image}
                      alt={product.name}
                      className="category-image"
                      onClick={() => handleCategoryClick(category.name)}
                    />
                  ))}
              </div>
            </Section>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
