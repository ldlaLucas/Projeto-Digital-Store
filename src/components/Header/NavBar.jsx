import React from 'react';
import './styles.css';

const NavBar = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Produtos</a></li>
        <li><a href="/categories">Categorias</a></li>
        <li><a href="/productsCart">Meus Pedidos</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
