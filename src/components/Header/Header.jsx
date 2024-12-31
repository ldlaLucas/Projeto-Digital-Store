import React from "react";
import "./styles.css";
import Logo from "../Logo/Logo";
import Search from "./Search";
import NavBar from "./NavBar";
import { useCart } from "../ShoppingCart/ShoppingCart";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-top">
        <div className="logoNavBar">
          <Logo type="header" className="LogoHeader" />
          <NavBar />
        </div>
        <Search />
        <div className="auth-buttons">
          <button className="register-button">Cadastrar</button>
          <button
            className="login-button"
            onClick={() => (window.location.href = "../../../public/login/login.html")}
          >
            Entrar
          </button>
          <div
            className="icon-with-indicator"
            onClick={() => navigate("/orders")}
          >
            <span className="indicator">{cartItems.length}</span>
            <i className="icon pi pi-shopping-cart" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
