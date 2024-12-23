import React, { useState } from "react";
import "./styles.css";
import Logo from "../Logo/Logo";
import Search from "./Search";
import NavBar from "./NavBar";

const Header = () => {
  const [cartCount, setCartCount] = useState(0); //simulando carrinho de compras

  return (
    <header className="header">
      <div className="header-top">
        <Logo type="header" />
        <Search />
        <div className="auth-buttons">
          <button className="register-button">Cadastrar</button>
          <button className="login-button">Entrar</button>
          <div className="icon-with-indicator">
            <span className="indicator ">{cartCount}</span>
            <i className="icon pi pi-shopping-cart"></i>
          </div>
        </div>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
