import React from 'react';
import logo from '../assets/logo.png'; // Substitua pelo caminho correto da logo

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo Sabor Solidário" style={styles.logo} />
      </div>
      <nav style={styles.nav}>
        <a href="#" style={styles.navItem}>REDE SABOR SOLIDÁRIO</a>
        <a href="#" style={styles.navItem}>JUNTE-SE À NÓS</a>
        <a href="#" style={styles.navItem}>CONTATO</a>
      </nav>
      <button style={styles.donateButton}>DOE E CADASTRE-SE</button>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2d8d45', // Verde
    padding: '1rem 2rem',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Adicionando um leve sombreamento
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '50px', // Ajuste o tamanho da logo
  },
  nav: {
    display: 'flex',
    gap: '2rem', // Espaçamento entre os itens de navegação
  },
  navItem: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
  },
  donateButton: {
    backgroundColor: '#ff9900', // Cor do botão "Doe e Cadastre-se"
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

export default Header;
