import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div>
        <p>Endereço: Rua Antônio Cândido, 514</p>
        <p>Email: solidariedade@exemplo.com</p>
        <p>Telefone: (11) 0000-0000</p>
        <p>© Copyright 2024 | Sabor Solidário | Todos os direitos reservado</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: { backgroundColor: '#357A38', color: 'black', padding: '1rem', textAlign: 'center' }
};

export default Footer;
