import React from 'react';
import logoHeader from '../../assets/logo-header.svg';
import logoFooter from '../../assets/logo-footer.svg';
import './styles.css';

const Logo = ({type}) => {
  const logo = type === 'header'? logoHeader : logoFooter;
  return (
    <img src={logo} className="logo" />
  );
};

export default Logo;
