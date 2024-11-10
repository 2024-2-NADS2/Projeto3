import React from 'react';
import './Footer.css';
import logo from './logo.png'; 
import celular from './celular.png'; 
import email from './email.png'; 
import localizacao from './localizacao.png'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-item sobre-nos">
            <a href="/sobre-nos">Sobre Nós</a>
          </div>
          <div className="footer-item termos-condicoes">
            <a href="/termos-de-uso">Termos de Uso</a>
          </div>
          <div className="footer-item junte-se-nos">
            <a href="/junte-se-a-nos">Junte-se à nós</a>
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-item">
            <img src={localizacao} alt="Localização" className="custom-icon" />
            <span>Rua Antonio Céspede, 514</span>
          </div>
          <div className="footer-item">
            <img src={email} alt="E-mail" className="custom-icon" />
            <span>SaborSolidario@gmail.com</span>
          </div>
          <div className="footer-item">
            <img src={celular} alt="Telefone" className="custom-icon" />
            <span>(11) 00000-0000</span>
          </div>
        </div>
        <div className="footer-logo">
          <div className="logo-circle">
            <img src={logo} alt="Sabor Solidário Logo" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright 2024 | Sabor Solidário | Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
