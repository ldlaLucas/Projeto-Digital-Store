import React from 'react';
import './styles.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Buscar produtos" />
      <button type="submit">Buscar</button>
    </div>
  );
};

export default SearchBar;
