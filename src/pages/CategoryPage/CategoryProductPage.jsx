import React, { useState } from "react";
import "./styles.css";
import Layout from "../../components/Layout/Layout";
import ProductCard from "../../components/ProductCard/ProductCard";
import FilterGroup from "../../components/FilterGroup/FilterGroup";
import products from "../../components/ProductData/ProductData";
import { useParams } from "react-router-dom";

const CategoryProductsPage = () => {
  const { category } = useParams();
  const [selectedFilters, setSelectedFilters] = useState({
    price: "all",
    category: "all",
  });

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters({
      ...selectedFilters,
      [filterType]: value,
    });
  };

  const handleClearFilters = () => {
    setSelectedFilters({
      price: "all",
      category: "all",
    });
  };

  const filteredProducts = products.filter((product) => {
    return (
      (selectedFilters.price === "all" ||
        product.price <= selectedFilters.price) &&
      (selectedFilters.category === "all" ||
        product.category === selectedFilters.category) &&
      product.category === category
    );
  });

  const priceOptions = [
    { text: "Até R$50", value: "50" },
    { text: "Até R$100", value: "100" },
    { text: "Até R$200", value: "200" },
  ];

  return (
    <Layout>
      <div className="category-products-page">
        <h1 className="category-title">{category}</h1>
        <div className="category-container">
          <aside className="filters">
            <FilterGroup
              title="Preço"
              inputType="radio"
              options={priceOptions}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
            />

            <button
              className="bt apply-filters"
              onClick={() => handleFilterChange(selectedFilters)}
            >
              Aplicar
            </button>
            <button className="bt clear-filters" onClick={handleClearFilters}>
              Limpar Filtros
            </button>
          </aside>
          <div className="product-listing-category">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                priceDiscount={product.priceDiscount}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProductsPage;
