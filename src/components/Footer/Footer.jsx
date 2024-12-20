import React from 'react';
import './styles.css';
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <footer className="footer">
      <Logo type="footer"/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="social-icons">
        {/* SVGs for social media icons */}
      </div>
      <hr />
      <p>© 2024 Digital Store</p>
    </footer>
  );
};

export default Footer;
