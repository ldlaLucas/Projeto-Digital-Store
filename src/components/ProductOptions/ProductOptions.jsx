import React from 'react';
import './styles.css';

const ProductOptions = ({ options }) => {
  return (
    <div className="product-options">
      {options.map((option, index) => (
        <div key={index} className="option">
          <label>{option.name}</label>
          <select>
            {option.values.map((value, idx) => (
              <option key={idx} value={value}>{value}</option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default ProductOptions;
