import React, { useState } from 'react';
import './Header.css';
import logo from './logo.png';
import casa from './casa.png';
import juntar from './juntar.png';
import email from './email.png';
import sobre from './sobre.png';

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className="nav">
        <a href="#home" className="nav-link home">
          <img src={casa} alt="Home Icon" className="icon" /> HOME
        </a>
        <a href="#sobre" className="nav-link">
          <img src={sobre} alt="About Icon" className="icon" /> SOBRE NÓS
        </a>
        <div className="nav-link" onClick={toggleDropdown}>
          <img src={juntar} alt="Join Icon" className="icon" /> JUNTE-SE À NÓS
          {showDropdown && (
            <div className="dropdown">
              <a href="#como-participar" className="dropdown-link">COMO PARTICIPAR</a>
              <a href="#trabalhe-conosco" className="dropdown-link">TRABALHE CONOSCO</a>
            </div>
          )}
        </div>
        <a href="#contato" className="nav-link">
          <img src={email} alt="Contact Icon" className="icon" /> CONTATO
        </a>
        <button className="register-btn">CADASTRE SUA ONG</button>
      </nav>
    </header>
  );
}

export default Header;
