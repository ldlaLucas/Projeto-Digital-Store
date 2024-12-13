import React from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import Search from './Search';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import '../App.css';

const Header = () => {
  return (
    <header className="header-container">
      <div>
        <Logo />
        <NavBar />
      </div>
      <div className='header-center'>
        <Search />
        <a href="/signup" className="signup-link">Cadastre-se</a>
        <Button label="Entrar" className="primary-button p-button-text" />
        <i className="pi pi-cart-plus"></i>
      </div>

    </header>
  );
};

export default Header;
