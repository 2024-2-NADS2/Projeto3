import React from 'react';

function Formulario() {
  return (
    <form style={styles.form}>
      <label style={styles.label}>
        NOME
        <input type="text" style={styles.input} required />
      </label>
      <label style={styles.label}>
        E-MAIL
        <input type="email" style={styles.input} required />
      </label>
      <label style={styles.label}>
        MENSAGEM
        <textarea style={styles.textarea} required></textarea>
      </label>
      <button type="submit" style={styles.button}>ENVIAR</button>
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
