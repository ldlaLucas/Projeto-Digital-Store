import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

// Componente FilterGroup para exibir e lidar com filtros
const FilterGroup = ({ selectedFilters, onFilterChange }) => {
  // Função para lidar com mudanças nos filtros
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    onFilterChange(name, value);
  };

  return (
    <div className="filter-group">
      <h3>Filtrar Produtos</h3>
      <div className="filters">
        <div className="filter">
          <label htmlFor="price" aria-label="Filtrar por preço">Preço</label>
          <select id="price" name="price" value={selectedFilters.price} onChange={handleFilterChange}>
            <option value="all">Todos</option>
            <option value="50">Até R$50</option>
            <option value="100">Até R$100</option>
            <option value="200">Até R$200</option>
          </select>
        </div>
        <div className="filter">
          <label htmlFor="size" aria-label="Filtrar por tamanho">Tamanho</label>
          <select id="size" name="size" value={selectedFilters.size} onChange={handleFilterChange}>
            <option value="all">Todos</option>
            <option value="P">P</option>
            <option value="M">M</option>
            <option value="G">G</option>
          </select>
        </div>
        <div className="filter">
          <label htmlFor="color" aria-label="Filtrar por cor">Cor</label>
          <select id="color" name="color" value={selectedFilters.color} onChange={handleFilterChange}>
            <option value="all">Todas</option>
            <option value="red">Vermelho</option>
            <option value="blue">Azul</option>
            <option value="green">Verde</option>
          </select>
        </div>
        <div className="filter">
          <label htmlFor="brand" aria-label="Filtrar por marca">Marca</label>
          <select id="brand" name="brand" value={selectedFilters.brand} onChange={handleFilterChange}>
            <option value="all">Todas</option>
            <option value="brand1">Marca 1</option>
            <option value="brand2">Marca 2</option>
          </select>
        </div>
        <div className="filter">
          <label htmlFor="rating" aria-label="Filtrar por avaliação">Avaliação</label>
          <select id="rating" name="rating" value={selectedFilters.rating} onChange={handleFilterChange}>
            <option value="all">Todas</option>
            <option value="1">1 estrela</option>
            <option value="2">2 estrelas</option>
            <option value="3">3 estrelas</option>
            <option value="4">4 estrelas</option>
            <option value="5">5 estrelas</option>
          </select>
        </div>
      </div>
      <button className="apply-filters">Aplicar</button>
      <button className="clear-filters">Limpar Filtros</button>
    </div>
  );
};

FilterGroup.propTypes = {
  selectedFilters: PropTypes.object.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default FilterGroup;
