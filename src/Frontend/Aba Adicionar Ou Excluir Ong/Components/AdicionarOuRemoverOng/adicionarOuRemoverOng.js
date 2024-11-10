import { useState } from 'react';
import './adicionarOuRemoverOng.css';

function App() {
  const [cnpj, setCnpj] = useState('');
  const [error, setError] = useState('');

  // Função para validar o CNPJ
  const validarCnpj = () => {
    if (cnpj.length !== 14) {
      setError('O CNPJ deve ter 14 dígitos');
    } else {
      setError('');
    }
  };

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
        <input
          className="input-field"
          type="text"
          placeholder="xxxxxxxxxxxxxx"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
          onBlur={validarCnpj}
        />
        {error && <h1 className="error-message">{error}</h1>} {/* Mensagem de erro */}
        <button className="consult-button">
          CONSULTAR CNPJ
        </button>
      </div>
    </div>
  );
}

export default App;
