import React from 'react';
import './adicionarOuRemoverOng.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">
        Olá! Ficamos muito felizes em saber que sua ONG deseja fazer parte do Sabor Solidário
      </h1>
      
      <div className="buttons">
        <p>Deseja adicionar sua ONG?</p>
        <button className="action-button">
          ADICIONE UMA ONG
        </button>
      </div>
      
      <div className="buttons">
        <p>Deseja remover sua ONG?</p>
        <label>Digite seu CNPJ:</label>
        <input className="input-field" type="text" placeholder="xxxxxxxxx-xx" />
        <button className="consult-button">
          CONSULTAR CNPJ
        </button>
      </div>
    </div>
  );
}

export default App;
