import React, { useState } from "react";
import "./styles.css";
import Layout from "../../components/Layout/Layout";
import ProductListing from "../../components/ProductListing/ProductListing";
import FilterGroup from "../../components/FilterGroup/FilterGroup";
import products from "../../components/ProductData/ProductData";

const ProductListingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <Layout>
      <div className="product-listing-page">
        <FilterGroup
          categories={[
            { value: "all", label: "Todas" },
            { value: "camisas", label: "Camisas" },
            { value: "calcas", label: "Calças" },
            { value: "bones", label: "Bonés" },
            { value: "headphones", label: "Headphones" },
            { value: "tenis", label: "Tênis" },
          ]}
          priceRanges={[]}
          onCategoryChange={handleCategoryChange}
        />
        <ProductListing products={filteredProducts} />
      </div>
    </Layout>
  );
};

export default ProductListingPage;
