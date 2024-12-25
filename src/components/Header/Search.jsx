import React, { useState } from "react";
import "./styles.css";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if(searchTerm.trim()){
      navigate(`/products?filter=${searchTerm}`)
    }
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className="search-container">
      <IconField className="search-bar">
        <InputIcon className="pi pi-search" />
        <InputText 
          placeholder="Pesquisar produtos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </IconField>
    </div>
  );
};

export default Search;
