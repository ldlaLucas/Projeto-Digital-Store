import React from 'react';
import './styles.css';

const FilterGroup = () => {
  return (
    <div className="filter-group">
      <h3>Filtrar Produtos</h3>
      <div className="filters">
        <div className="filter">
          <label htmlFor="category">Categoria</label>
          <select id="category">
            <option value="all">Todas</option>
            <option value="category1">Categoria 1</option>
            <option value="category2">Categoria 2</option>
          </select>
        </div>
        <div className="filter">
          <label htmlFor="price">Preço</label>
          <select id="price">
            <option value="all">Todos</option>
            <option value="low">Menor que R$50</option>
            <option value="medium">R$50 - R$200</option>
            <option value="high">Maior que R$200</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterGroup;
