import React from "react";
import "./trabalheConosco.css";
import email from './email.png';
import linkedin from './linkedin.png';
import laptop from './laptop.png';

const TrabalheConosco = () => {
  return (
    <div className="container">
      {/* Seção Trabalhe Conosco */}
      <div className="section trabalhe-conosco">
        <div className="work-content">
          <h2>TRABALHE CONOSCO</h2>
          <img
            src={laptop}
            alt="Pessoa trabalhando"
            className="work-image"
          />
          <p className="bold-text">
            Faça parte da equipe do Sabor Solidário e ajude a construir um
            futuro mais solidário!
          </p>
        </div>
      </div>

      {/* Seção Contato (E-mail e LinkedIn) */}
      <div className="contact-section">
        <div className="email-card">
          <img src={email} alt="Ícone de E-mail" className="email-icon" />
          <h3>E-MAIL</h3>
          <p>SaborSolidario@gmail.com</p>
          <p className="email-content">
            Se você compartilha desse propósito e quer contribuir com suas
            habilidades, envie seu currículo e uma breve carta de apresentação.
          </p>
        </div>
        
        <div className="linkedin-card">
          <img src={linkedin} alt="Ícone do LinkedIn" className="linkedin-icon" />
          <h3>CONECTE-SE COM LINKEDIN</h3>
          <p>
            Aqui você pode visualizar as vagas abertas de acordo com seu perfil
            do LinkedIn.
          </p>
        </div>
      </div>

      {/* Texto chamativo abaixo dos cards */}
      <div className="chamativo">
        Venha fazer a diferença com a gente. Junte-se ao Sabor Solidário e ajude a transformar vidas!
      </div>
    </div>
  );
};

export default TrabalheConosco;
