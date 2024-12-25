import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

// Componente ProductOptions para exibir opções de produto
const ProductOptions = ({ options }) => {
  if (!options || options.length === 0) {
    return null; // Retornar null se options não estiver definido ou estiver vazio
  }

  return (
    <div className="product-options">
      <h3>Opções de Produto</h3>
      <ul>
        {options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </div>
  );
};

ProductOptions.propTypes = {
  options: PropTypes.array.isRequired,
};

export default ProductOptions;
