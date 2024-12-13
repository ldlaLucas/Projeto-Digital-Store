import React, { useState } from 'react';
import '../App.css';

const NavBar = () => {
  const [activeTab, setActiveTab] = useState('');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="navbar-container">
      <ul className="navbar-list p-d-flex p-ai-center p-jc-start">
        {['Home', 'Produtos', 'Categorias', 'Meus Pedidos'].map((tab) => (
          <li
            key={tab}
            className={`navbar-item ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            <span className={`navbar-text ${activeTab === tab ? 'active-text' : ''}`}>
              {tab}
            </span>
            {activeTab === tab && <div className="navbar-line" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
