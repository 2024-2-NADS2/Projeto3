import React from "react";
import "./trabalheConosco.css";

const TrabalheConosco = () => {
  return (
    <div className="container">
      {/* Seção Trabalhe Conosco */}
      <div className="section trabalhe-conosco">
        <img
          src="https://via.placeholder.com/150" // Substitua pela URL da sua imagem
          alt="Pessoa trabalhando"
          className="work-image"
        />
        <div className="content">
          <h2>TRABALHE CONOSCO</h2>
          <p>
            Faça parte da equipe do Sabor Solidário e ajude a construir um
            futuro mais solidário!
          </p>
        </div>
      </div>

      {/* Seção E-mail */}
      <div className="section email-section">
        <div className="email-card">
          <i className="email-icon">📧</i>
          <h3>E-MAIL</h3>
          <p>SaborSolidario@gmail.com</p>
        </div>
        <div className="email-content">
          <p>
            Se você compartilha desse propósito e quer contribuir com suas
            habilidades, envie seu currículo e uma breve carta de apresentação.
          </p>
        </div>
      </div>

      {/* Seção LinkedIn */}
      <div className="section linkedin-section">
        <h2>O DESAFIO CERTO PARA VOCÊ</h2>
        <div className="linkedin-card">
          <i className="linkedin-icon">🔗</i>
          <h3>CONECTE-SE COM LINKEDIN</h3>
          <p>
            Aqui você pode visualizar as vagas abertas de acordo com seu perfil
            do LinkedIn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrabalheConosco;
