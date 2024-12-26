import React from 'react';
import './styles.css';
import Layout from '../../components/Layout/Layout';
import ProductCard from '../../components/ProductCard/ProductCard';
import products from '../../components/ProductData/ProductData';
import { useParams } from 'react-router-dom';

const CategoryProductPage = () => {
  const { category } = useParams();

  const filteredProducts = products.filter(product => product.category === category);

  return (
    <Layout>
      <div className="category-products-page">
        <h1 className="category-title">{category}</h1>
        <div className="product-listing">
          {filteredProducts.map(product => (
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
    </Layout>
  );
};

export default CategoryProductPage;
