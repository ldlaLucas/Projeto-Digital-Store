import React, { useState } from 'react';
import './styles.css';
import Layout from '../../components/Layout/Layout';
import ProductCard from '../../components/ProductCard/ProductCard';
import FilterGroup from '../../components/FilterGroup/FilterGroup';
import products from '../../components/ProductData/ProductData';

// Componente CategoryPage para exibir produtos de uma categoria específica
const CategoryPage = ({ category }) => {
  // Estado para armazenar os filtros selecionados
  const [selectedFilters, setSelectedFilters] = useState({
    price: 'all',
    size: 'all',
    color: 'all',
    brand: 'all',
    rating: 'all',
  });

  // Função para lidar com mudanças nos filtros
  const handleFilterChange = (filterType, value) => {
    setSelectedFilters({
      ...selectedFilters,
      [filterType]: value,
    });
  };

  // Filtra os produtos com base nos filtros selecionados e na categoria
  const filteredProducts = products.filter(product => {
    return (
      (selectedFilters.price === 'all' || product.price <= selectedFilters.price) &&
      (selectedFilters.size === 'all' || product.size === selectedFilters.size) &&
      (selectedFilters.color === 'all' || product.color === selectedFilters.color) &&
      (selectedFilters.brand === 'all' || product.brand === selectedFilters.brand) &&
      (selectedFilters.rating === 'all' || product.rating >= selectedFilters.rating) &&
      product.category === category
    );
  });

  return (
    <Layout>
      <div className="category-page">
        {/* Título da Categoria */}
        <h1 className="category-title">{category}</h1>
        <div className="category-content">
          {/* Seção de Filtros */}
          <aside className="filters">
            <FilterGroup
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange} // Referência correta da função handleFilterChange
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

export default CategoryPage;
