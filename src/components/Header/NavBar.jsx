import React from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><NavLink to="/" className = {({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
        <li><NavLink to="/products" className = {({ isActive }) => (isActive ? 'active' : '')}>Produtos</NavLink></li>
        <li><NavLink to="/categories" className = {({ isActive }) => (isActive ? 'active' : '')}>Categorias</NavLink></li>
        <li><NavLink to="/orders"  className = {({ isActive }) => (isActive ? 'active' : '')}>Meus Pedidos</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;
