import React from 'react';
import './comoParticipar.css';
import endereco from './images/endereco.png';
import telefone from './images/telefone.png';
import mensagem from './images/mensagem.png';
import voluntario from './images/voluntario.png';

const ComoParticipar = () => {
  return (
    <div className="participar-container">
      <h1 className="titulo">COMO PARTICIPAR ?</h1>
      <p className="descricao">
        Contribuir para a mudança social é fácil! Aqui estão algumas maneiras de se envolver com o Sabor Solidário e apoiar as ONGs cadastradas.
      </p>

      <div className="cards-container">
        <div className="card">
          <img src={endereco} alt="Ícone Endereço" className="card-icon" />
          <h3>ENDEREÇO</h3>
          <p>Descubra a ONG mais próxima de você e veja os horários de funcionamento para fazer sua doação de alimentos.</p>
        </div>

        <div className="card">
          <img src={telefone} alt="Ícone Telefone" className="card-icon" />
          <h3>NÚMERO DE TELEFONE</h3>
          <p>Se você deseja saber mais sobre como ajudar ou tem alguma dúvida, entre em contato diretamente com as ONGs!</p>
        </div>

        <div className="card">
          <img src={mensagem} alt="Ícone E-mail" className="card-icon" />
          <h3>E-MAIL</h3>
          <p>Se você prefere se comunicar por e-mail, pode entrar em contato diretamente com as ONGs.</p>
        </div>
      </div>

      {/* Botão reposicionado abaixo dos cards */}
      <div className="button-container">
        <button className="button">VEJA A LISTA DE ONGS!</button>
      </div>

      {/* Imagem dos voluntários separada */}
      <img src={voluntario} alt="Imagem Voluntários" className="voluntario-image" />

      <h2 className="footer-text">A DOAÇÃO DE UM ALIMENTO IMPORTA E SALVA VIDAS!</h2>
    </div>
  );
};

export default ComoParticipar;
