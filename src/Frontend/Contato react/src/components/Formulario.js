import React, { useState } from 'react';

function Formulario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { nome, email, mensagem };

    try {
      const response = await fetch('http://localhost:5000/api/formulario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Formulário enviado com sucesso');
        setNome('');
        setEmail('');
        setMensagem('');
      } else {
        alert('Erro ao enviar o formulário');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao enviar o formulário');
    }
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <label style={styles.label}>
        NOME
        <input
          type="text"
          style={styles.input}
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </label>
      <label style={styles.label}>
        E-MAIL
        <input
          type="email"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label style={styles.label}>
        MENSAGEM
        <textarea
          style={styles.textarea}
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          required
        ></textarea>
      </label>
      <button type="submit" style={styles.button}>
        ENVIAR
      </button>
    </form>
  );
}

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '400px',
    margin: '0 auto',
  },
  label: {
    fontSize: '1rem',
    color: '#4CAF50',
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    resize: 'vertical',
    height: '100px',
  },
  button: {
    backgroundColor: '#FF9800',
    color: '#fff',
    padding: '0.75rem',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
  },
};

export default Formulario;
