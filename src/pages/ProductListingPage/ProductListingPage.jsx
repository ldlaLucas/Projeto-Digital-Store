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
    category: 'all',
  });

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters({
      ...selectedFilters,
      [filterType]: value,
    });
  };

  const handleClearFilters = () => {
    setSelectedFilters({
      price: 'all',
      size: 'all',
      color: 'all',
      category: 'all',
    });
  };

  const filteredProducts = products.filter(product => {
    return (
      (selectedFilters.price === 'all' || product.price <= selectedFilters.price) &&
      (selectedFilters.size === 'all' || product.size === selectedFilters.size) &&
      (selectedFilters.color === 'all' || product.color === selectedFilters.color) &&
      (selectedFilters.category === 'all' || product.category === selectedFilters.category)
    );
  });

  const priceOptions = [
    { text: 'Até R$50', value: '50' },
    { text: 'Até R$100', value: '100' },
    { text: 'Até R$200', value: '200' },
  ];

  const sizeOptions = [
    { text: 'P', value: 'P' },
    { text: 'M', value: 'M' },
    { text: 'G', value: 'G' },
  ];

  const colorOptions = [
    { text: 'Vermelho', value: 'Vermelho' },
    { text: 'Azul', value: 'Azul' },
    { text: 'Verde', value: 'Verde' },
  ];

  const categoryOptions = [
    { text: 'Camisetas', value: 'Camisetas' },
    { text: 'Calças', value: 'Calças' },
    { text: 'Bonés', value: 'Bonés' },
    { text: 'Headphones', value: 'Headphones' },
    { text: 'Tênis', value: 'Tênis' },
  ];

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
              title="Preço"
              inputType="radio"
              options={priceOptions}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
            />
            <FilterGroup
              title="Tamanho"
              inputType="checkbox"
              options={sizeOptions}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
            />
            <FilterGroup
              title="Cor"
              inputType="checkbox"
              options={colorOptions}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
            />
            <FilterGroup
              title="Categoria"
              inputType="radio"
              options={categoryOptions}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
            />
            <button className="bt apply-filters" onClick={() => handleFilterChange(selectedFilters)}>Aplicar</button>
            <button className="bt clear-filters" onClick={handleClearFilters}>Limpar Filtros</button>
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
