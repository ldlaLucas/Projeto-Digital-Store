import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import 'primeicons/primeicons.css';
import '../App.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Acionar o evento de pesquisa aqui, por exemplo:
    console.log('Pesquisando por:', searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-container p-d-flex p-ai-center p-jc-between">
      <InputText
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Buscar produtos"
        className="search-input p-mr-2"
      />
      <button onClick={handleSearch} className="search-button p-button-text">
      <i class="pi pi-search"></i>
      </button>
    </div>
  );
};

export default Search;
