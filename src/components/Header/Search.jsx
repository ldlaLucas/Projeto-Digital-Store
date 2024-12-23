import React from "react";
import "./styles.css";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
// import { Button } from "primereact/button";
// import { Badge } from "primereact/badge";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const Search = () => {
  return (
    <div className="search-wrapper">
      <IconField className="search-bar">
        <InputIcon className="pi pi-search" />
        <InputText placeholder="Buscar produtos..." />
      </IconField>
    </div>
  );
};

export default Search;
