import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const FilterGroup = ({ nameTitle,title, inputType, options, selectedFilters, onFilterChange }) => {
  return (
    <div className="filter-group">
      <h3 className="filter-group-title">{nameTitle}</h3>
      <div className="filter-options">
        {Array.isArray(options) && options.map((option, index) => (
          <div key={index} className="filter-option">
            <input
              type={inputType}
              id={option.value || option.text}
              name={title}
              value={option.value || option.text}
              checked={selectedFilters[title] === (option.value || option.text)}
              onChange={() => onFilterChange(title, option.value || option.text)}
              className="filter-input"
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
  selectedFilters: PropTypes.object.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default FilterGroup;
