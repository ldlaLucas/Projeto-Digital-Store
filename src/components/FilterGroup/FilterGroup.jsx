import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const FilterGroup = ({ categories, priceRanges, onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  return (
    <div className="filter-group">
      <h3>Filtrar Produtos</h3>
      <div className="filters">
        <div className="filter">
          <label htmlFor="category" aria-label="Filtrar por categoria">Categoria</label>
          <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="all">Todas</option>
            {categories.map((category, index) => (
              <option key={index} value={category.value}>{category.label}</option>
            ))}
          </select>
        </div>
        <div className="filter">
          <label htmlFor="price" aria-label="Filtrar por preço">Preço</label>
          <select id="price" value={selectedPrice} onChange={handlePriceChange}>
            <option value="all">Todos</option>
            {priceRanges.map((range, index) => (
              <option key={index} value={range.value}>{range.label}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

FilterGroup.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })),
  priceRanges: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })),
  onCategoryChange: PropTypes.func.isRequired,
};

export default FilterGroup;
