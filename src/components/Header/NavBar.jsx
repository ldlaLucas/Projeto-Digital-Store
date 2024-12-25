import React from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><NavLink to="/" activeClassName = "active">Home</NavLink></li>
        <li><NavLink to="/products" activeClassName = "active">Produtos</NavLink></li>
        <li><NavLink to="/categories" activeClassName = "active">Categorias</NavLink></li>
        <li><NavLink to="/orders"  activeClassName = "active">Meus Pedidos</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;
