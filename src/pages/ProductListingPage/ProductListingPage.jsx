import React from 'react';
import './styles.css';
import Layout from '../../components/Layout/Layout';
import ProductListing from '../../components/ProductListing/ProductListing';
import FilterGroup from '../../components/FilterGroup/FilterGroup';

const ProductListingPage = () => {
  const products = [
    { name: 'Produto 1', image: 'public/product-thumb-1.png', price: 200, priceDiscount: 149.9 },
    { name: 'Produto 2', image: 'public/product-thumb-2.png', price: 49.9 },
    { name: 'Produto 3', image: 'public/product-thumb-3.png', price: 99.9 },
    { name: 'Produto 4', image: 'public/product-thumb-4.png', price: 299.9, priceDiscount: 249.9 },
  ];

  return (
    <Layout>
      <div className="product-listing-page">
        <FilterGroup />
        <ProductListing products={products} />
      </div>
    </Layout>
  );
};

export default ProductListingPage;
