import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const InformationSection = ({ title, informations }) => {
  return (
    <div className="footer-section">
      <h3 className="footer-title">{title}</h3>
      <ul className="footer-list">
        {informations.map((info, index) => (
          <li key={index}>
            <Link to={info.link}>{info.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InformationSection;
