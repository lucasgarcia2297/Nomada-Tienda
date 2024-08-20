import '../styles/Header.css';
import { IconMenu, IconCart, IconUser, IconSearch, IconArrowDownDouble } from './Icons';
import Logo from '../assets/Logo_Nómada.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <button className="menu-button">
          <IconMenu />
        </button>
        <div className="logo">
          <Link to='/'><img src={Logo} alt="Nómada Logo" className="logo-img" /></Link>
        </div>
        <div className="search-container">
          <form className="form-search">
            <input type="text" className="search-input" placeholder="Buscar productos..." />
            <button className="search-button" type='search'><IconSearch/></button>
          </form>
        </div>
        <div className="header-icons">
          <button className="login-button">
            <Link to='/login'><IconUser /></Link>
          </button>
          <button className="cart-button">
            <Link to='/cart'><IconCart /></Link>
          </button>
        </div>
      </div>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link>Categorías<IconArrowDownDouble/></Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><Link to="/faq">Preguntas Frecuentes</Link></li>
          <li><Link to="/about">Nosotros</Link></li>
        </ul>
      </nav>
    </header>
  );
};
