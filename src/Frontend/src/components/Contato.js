import React from 'react';
import Formulario from './Formulario';
import comecoImage from '../assets/comeco.png';
import enderecoImage from '../assets/endereco.png';
import instaImage from '../assets/insta.png';
import linkImage from '../assets/link.png';
import mensagemImage from '../assets/mensagem.png';
import telefoneImage from '../assets/telefone.png';

function Contato() {
  return (
    <main style={styles.mainContainer}>
      <div style={styles.headerImageContainer}>
        <img src={comecoImage} alt="Imagem de Contato" style={styles.headerImage} />
      </div>

      <h1 style={styles.title}>CONTATO</h1>
      <p style={styles.description}>
        Obrigado por visitar nosso site! Se você tiver alguma dúvida, sugestão ou quiser falar conosco, estamos aqui para ajudar.
      </p>

      <div style={styles.contactGrid}>
        <div style={styles.contactBox}>
          <img src={mensagemImage} alt="Ícone de E-mail" style={styles.icon} />
          <p style={styles.contactType}>E-MAIL</p>
          <p>contato@saborsolidario.com</p>
        </div>
        <div style={styles.contactBox}>
          <img src={telefoneImage} alt="Ícone de Telefone" style={styles.icon} />
          <p style={styles.contactType}>NUMERO DE TELEFONE</p>
          <p>(11) 1234-5678</p>
        </div>
        <div style={styles.contactBox}>
          <img src={enderecoImage} alt="Ícone de Endereço" style={styles.icon} />
          <p style={styles.contactType}>ENDEREÇO</p>
          <p>Rua Antonio Céspede, 514, Bairro, Cidade - Estado, CEP 09000-490</p>
        </div>
        <div style={styles.contactBox}>
          <img src={instaImage} alt="Ícone do Instagram" style={styles.icon} />
          <img src={linkImage} alt="Ícone do LinkedIn" style={{ ...styles.icon, marginLeft: '10px' }} />
          <p style={styles.contactType}>REDES SOCIAIS</p>
          <p>Siga nossas redes sociais para nos acompanhar</p>
        </div>
      </div>

      <h2 style={styles.subtitle}>ENTRE EM CONTATO CONOSCO</h2>
      <p style={styles.formDescription}>
        Se você tiver alguma dúvida, sugestão ou feedback, fique à vontade para nos enviar uma mensagem.
      </p>

      <Formulario />
    </main>
  );
}

const styles = {
  mainContainer: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#FFFBEA',
  },
  headerImageContainer: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  headerImage: {
    width: '100%',
    maxHeight: '200px',
    objectFit: 'cover',
  },
  title: {
    fontSize: '1.8rem',
    color: '#4CAF50',
    margin: '10px 0',
  },
  description: {
    fontSize: '1rem',
    color: '#333',
    marginBottom: '20px',
  },
  contactGrid: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  contactBox: {
    backgroundColor: '#4CAF50',
    color: '#FFF',
    padding: '15px',
    borderRadius: '8px',
    width: '180px',
    textAlign: 'center',
  },
  contactType: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
    margin: '10px 0 5px',
  },
  icon: {
    width: '35px',
    height: '35px',
  },
  subtitle: {
    fontSize: '1.4rem',
    color: '#4CAF50',
    margin: '20px 0 10px',
  },
  formDescription: {
    fontSize: '1rem',
    color: '#333',
    marginBottom: '20px',
  },
};

export default Contato;
