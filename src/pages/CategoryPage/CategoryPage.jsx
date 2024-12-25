import React, { useState } from 'react';
import './styles.css';
import Layout from '../../components/Layout/Layout';
import ProductListing from '../../components/ProductListing/ProductListing';
import FilterGroup from '../../components/FilterGroup/FilterGroup';
import products from '../../components/ProductData/ProductData';

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'Todas' },
    { value: 'camisas', label: 'Camisas' },
    { value: 'calcas', label: 'Calças' },
    { value: 'bones', label: 'Bonés' },
    { value: 'headphones', label: 'Headphones' },
    { value: 'tenis', label: 'Tênis' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <Layout>
      <div className="category-page">
        <FilterGroup
          categories={categories}
          priceRanges={[]}
          onCategoryChange={setSelectedCategory}
        />
        <ProductListing products={filteredProducts} />
      </div>
    </Layout>
  );
};

export default CategoryPage;
