import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const FilterGroup = ({ title, inputType, options }) => {
  return (
    <div className="filter-group">
      <h3 className="filter-group-title">{title}</h3>
      <div className="filter-options">
        {Array.isArray(options) && options.map((option, index) => (
          <div key={index} className="filter-option">
            <input
              type={inputType}
              id={option.value || option.text}
              name={title}
              value={option.value || option.text}
            />
            <label htmlFor={option.value || option.text}>{option.text}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

FilterGroup.propTypes = {
  title: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string,
    })
  ).isRequired,
};

export default FilterGroup;
