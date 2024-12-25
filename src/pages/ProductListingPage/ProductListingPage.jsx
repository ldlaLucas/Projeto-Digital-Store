import React, { useState } from 'react';
import './styles.css';
import Layout from '../../components/Layout/Layout';
import ProductCard from '../../components/ProductCard/ProductCard';
import FilterGroup from '../../components/FilterGroup/FilterGroup';
import products from '../../components/ProductData/ProductData';

const ProductListingPage = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    price: 'all',
    size: 'all',
    color: 'all',
    brand: 'all',
    rating: 'all',
  });

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters({
      ...selectedFilters,
      [filterType]: value,
    });
  };

  const filteredProducts = products.filter(product => {
    return (
      (selectedFilters.price === 'all' || product.price <= selectedFilters.price) &&
      (selectedFilters.size === 'all' || product.size === selectedFilters.size) &&
      (selectedFilters.color === 'all' || product.color === selectedFilters.color) &&
      (selectedFilters.brand === 'all' || product.brand === selectedFilters.brand) &&
      (selectedFilters.rating === 'all' || product.rating >= selectedFilters.rating)
    );
  });

  return (
    <Layout>
      <div className="product-listing-page">
        {/* Dropdown de Ordenação */}
        <div className="sorting-dropdown">
          <label htmlFor="sort">Ordenar por:</label>
          <select id="sort" name="sort">
            <option value="price-asc">Preço: Mais barato</option>
            <option value="price-desc">Preço: Mais caro</option>
          </select>
        </div>
        <div className="product-listing-content">
          {/* Seção de Filtros */}
          <aside className="filters">
            <FilterGroup
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
            />
          </aside>
          {/* Listagem de Produtos */}
          <section className="product-listing">
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
          </section>
        </div>
        <div className="pagination">
          {/* Implementar a lógica de paginação ou carregamento infinito aqui */}
        </div>
      </div>
    </Layout>
  );
};

export default ProductListingPage;
