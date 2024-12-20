import React from 'react';
import './styles.css';
import Logo from '../Logo/Logo';
import Search from './Search';
import NavBar from './NavBar';

const Header = () => {
  return (
    <header className="header">
      <Logo type='header' />
      <Search />
      <NavBar />
    </header>
  );
};

export default Header;
