import React from 'react';
import rankingImage from '../assets/ranking.jpeg'; // Certifique-se que o caminho da imagem esteja correto

function Ranking() {
  return (
    <section style={styles.ranking}>
      <img src={rankingImage} alt="Ranking de Alimentos Doados" style={styles.image} />
    </section>
  );
}

const styles = {
  ranking: { 
    padding: '2rem', 
    backgroundColor: '#ff9900', 
    color: 'white', 
    textAlign: 'center' 
  },
  image: { 
    maxWidth: '100%', 
    height: 'auto' 
  }
};

export default Ranking;
