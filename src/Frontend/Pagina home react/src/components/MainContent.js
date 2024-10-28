import React from 'react';
import caixaImage from '../assets/caixa.png';   // Caminho correto para a imagem "caixa.png"
import madeiraImage from '../assets/madeira.png'; // Caminho correto para a imagem "madeira.png"
import sacolaImage from '../assets/sacola.png'; // Caminho correto para a imagem "sacola.png"
import Carousel from './Carousel';
import Ranking from './Ranking';

function MainContent() {
  return (
    <main>
      <Carousel />
      <div style={styles.headerSection}>
        <h1 style={styles.title}>
          Organize suas doações: a agenda
        </h1>
        <h1 style={styles.title}>
          que conecta ONGs e beneficiários!
        </h1>
        <button style={styles.ctaButton}>DOE E CADASTRE-SE</button>
      </div>

      <div style={styles.statsSection}>
        <div style={styles.statsGrid}>
          <div style={styles.statBox}>
            <h2 style={styles.statNumber}>12.58 MILHÕES</h2>
            <p style={styles.statText}>TONELADAS DE ALIMENTOS</p>
            <p style={styles.statText}>SÃO DESPERDIÇADOS POR</p>
            <p style={styles.statText}>ANO NO BRASIL</p>
          </div>
          <div style={styles.statBox}>
            <h2 style={styles.statNumber}>60 KG</h2>
            <p style={styles.statText}>DE COMIDA SÃO</p>
            <p style={styles.statText}>DESPERDIÇADAS</p>
            <p style={styles.statText}>POR CADA BRASILEIRO</p>
            <p style={styles.statText}>POR ANO</p>
          </div>
          <div style={styles.statBox}>
            <h2 style={styles.statNumber}>125.2 MILHÕES</h2>
            <p style={styles.statText}>DE BRASILEIROS ESTÃO EM</p>
            <p style={styles.statText}>SITUAÇÃO DE INSEGURANÇA</p>
            <p style={styles.statText}>ALIMENTAR</p>
          </div>
        </div>
        <p style={styles.footnote}>
          * Dados do relatório FAO de 2021 e Rede Brasileira de Pesquisa em
          Soberania e Segurança Alimentar e Nutricional (Rede PENSSAN)
        </p>
      </div>

      <Ranking />

      <div style={styles.contentSection}>
        <div style={styles.textImageContainer}>
          <div style={styles.textContainer}>
            <h2 style={styles.sectionTitle}>
              No Brasil, 125 milhões de pessoas vivem em situação de insegurança alimentar.
            </h2>
            <p style={styles.sectionText}>
              A ONG Sabor Solidário, atua desde 2024 auxiliando pessoas em
              situação de insegurança alimentar através do combate ao desperdício
              de alimentos. <b>Mas você sabe o que significa insegurança alimentar?</b>
            </p>
            <p style={styles.sectionText}>
              Estado de insegurança alimentar é quando não há a garantia de que
              teremos o que comer na próxima refeição. Uma situação inaceitável
              especialmente aqui no Brasil, que bate recordes no agronegócio e
              desperdiçou 23,6 milhões de toneladas de alimentos em 2019.
            </p>
            <p style={styles.sectionText}>
              Faça sua doação com a ONG Sabor Solidário e colabore com nosso
              trabalho no combate ao desperdício de alimentos.
            </p>
            <p style={styles.sectionHighlight}>
              Hoje, através de entidades sociais parceiras, ajudamos a complementar
              a refeição de pessoas de forma digna e nutritiva, em lugares onde
              muitos são esquecidos.
            </p>
          </div>

          <div style={styles.imageContainer}>
            <img
              src={sacolaImage} // Usando a variável importada
              alt="Pessoa segurando uma sacola de alimentos"
              style={styles.image}
            />
          </div>
        </div>
      </div>

      <div style={styles.cardSection}>
        <div style={styles.cardGrid}>
          <div style={styles.card}>
            <img
              src={caixaImage} // Usando a variável importada
              alt="ONG: Disponibilize seus horários"
              style={styles.cardImage}
            />
            <div style={styles.cardBody}>
              <h3 style={styles.cardTitle}>ONG: Disponibilize seus horários</h3>
              <p style={styles.cardText}>
                Ajude a organizar as doações! Insira os horários em que sua ONG pode receber doações.
              </p>
            </div>
          </div>

          <div style={styles.card}>
            <img
              src={madeiraImage} // Usando a variável importada
              alt="Beneficiário: Escolha seus horários"
              style={styles.cardImage}
            />
            <div style={styles.cardBody}>
              <h3 style={styles.cardTitle}>Beneficiário: Escolha seus horários</h3>
              <p style={styles.cardText}>
                Encontre o horário mais conveniente para retirar suas doações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Estilos
const styles = {
  headerSection: {
    backgroundColor: '#ff9900',
    textAlign: 'center',
    padding: '4rem 5rem 6rem 2rem', // Aumentado o padding para ampliar o espaço
    color: '#fcffe0',
    margin: '-1.3rem',
  },
  title: {
    fontSize: '40px',
    marginBottom: '1.6rem',
    wordSpacing: '1px',
    lineHeight: '0.5',
  },
  ctaButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '1rem 2rem',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    marginTop: '2rem',
  },
  statsSection: {
    backgroundColor: '#4CAF50',
    padding: '2rem 2rem 5rem 2rem',
    textAlign: 'center',
    color: '#FCFFE0',
  },
  statsGrid: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  statBox: {
    padding: '1rem',
    margin: '2rem',
    borderRadius: '8px',
    flex: '1',
    textAlign: 'center',
  },
  statNumber: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  statText: {
    fontSize: '1rem',
    margin: '0rem',
  },
  footnote: {
    marginTop: '1.5rem',
    fontSize: '0.8rem',
    color: 'white',
    opacity: 0.8,
    margin: '0rem',
  },
  contentSection: {
    padding: '20px',
    backgroundColor: '#4CAF50',
    marginTop: '20px',
  },
  textImageContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  textContainer: {
    flex: '1 1 60%',
    marginRight: '2rem',
  },
  sectionTitle: {
    color: '#FCFFE0',
    fontSize: '2rem',
    marginBottom: '10px',
  },
  sectionText: {
    color: '#FCFFE0',
    fontSize: '1.2rem',
    lineHeight: '1.8',
  },
  sectionHighlight: {
    fontWeight: 'bold',
    color: '#FCFFE0',
    marginTop: '1rem',
    fontSize: '1.2rem',
  },
  imageContainer: {
    flex: '1 1 35%',
    textAlign: 'justify',
  },
  image: {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '10px',
  },
  cardSection: {
    backgroundColor: '#4CAF50',
    padding: '40px 20px',
    textAlign: 'justify',
  },
  cardGrid: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px',
  },
  card: {
    backgroundColor: '#FF9800',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    width: '300px',
    textAlign: 'center',
    transition: 'transform 0.2s',
  },
  cardImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  cardBody: {
    padding: '20px',
    backgroundColor: '#FF9800',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  cardText: {
    fontSize: '1rem',
    color: '#FCFFE0',
  },
};

export default MainContent;
