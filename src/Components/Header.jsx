import '../styles/Header.css';
import { IconMenu, IconCart, IconUser } from './Icons'; 
import Logo from '../assets/Logo_Nómada.svg'; 

export const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <button className="menu-button">
          <IconMenu />
        </button>
        <div className="logo">
          <img src={Logo} alt="Nómada Logo" className="logo-img" />
        </div>
        <form className="form-search">
          <input type="text" className="search-input" placeholder="Buscar productos..." />
          <button className="search-button" type='search'>Buscar</button>
        </form>
        <div className="header-icons">
          <button className="login-button">
            <IconUser />
          </button>
          <button className="cart-button">
            <IconCart />
          </button>
        </div>
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/contact">Contacto</a></li>
          <li><a href="/faq">Preguntas Frecuentes</a></li>
          <li><a href="/about">Nosotros</a></li>
        </ul>
      </nav>
    </header>
  );
};
