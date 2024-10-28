import React, { useState } from 'react';
import carrosel1 from '../assets/carrosel1.jpeg'; // Caminho para a imagem 1
import carrosel2 from '../assets/carrosel2.jpeg'; // Caminho para a imagem 2
import carrosel3 from '../assets/carrosel3.jpeg'; // Caminho para a imagem 3

function Carousel() {
  const images = [
    { 
      src: carrosel1, 
      text: "A conexão entre quem PODE DOAR e quem PRECISA", 
      textStyle: styles.textOverlayLeft // Estilo específico para a primeira imagem
    },
    { 
      src: carrosel2, 
      text: "Contribua para um futuro SEM FOME", 
      textStyle: styles.textOverlayRight // Estilo específico para a segunda imagem (texto à direita)
    },
    { 
      src: carrosel3, 
      text: "Cada doação conta para um MUNDO MELHOR", 
      textStyle: styles.textOverlayLeft // Estilo específico para a terceira imagem
    }
  ]; // Array de objetos com imagens e estilos

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div style={styles.carouselContainer}>
      <button onClick={prevSlide} style={styles.navButtonLeft}>‹</button>

      {/* Container da imagem e do texto */}
      <div style={styles.imageContainer}>
        <img
          src={images[currentImageIndex].src}
          alt="Carrossel"
          style={styles.carouselImage}
        />
        {/* Texto com estilo dinâmico */}
        <div style={images[currentImageIndex].textStyle}>
          {images[currentImageIndex].text}
        </div>
      </div>

      <button onClick={nextSlide} style={styles.navButtonRight}>›</button>
    </div>
  );
}

const styles = {
  carouselContainer: {
    position: 'relative',
    width: '100%',
    height: '720px',
    overflow: 'hidden',
    textAlign: 'center',
    marginBottom: '10px',
  },
  imageContainer: {
    position: 'relative', // Permite que o texto fique posicionado sobre a imagem
    width: '100%',
    height: '100%',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Garante que a imagem ocupe todo o espaço sem distorção
  },
  // Estilo para o texto na primeira e terceira imagens (texto à esquerda)
  textOverlayLeft: {
    position: 'absolute',
    top: '50%', 
    left: '50px', // Alinha o texto à esquerda
    transform: 'translateY(-50%)',
    color: 'white',
    padding: '20px 30px',
    fontSize: '4rem', // Aumenta o tamanho da fonte
    fontWeight: 'bold',
    textAlign: 'left',
    maxWidth: '40%',
    lineHeight: '1.2',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Removido o fundo escuro
  },
  // Estilo para o texto na segunda imagem (texto à direita)
  textOverlayRight: {
    position: 'absolute',
    top: '50%',
    right: '50px', // Alinha o texto à direita
    transform: 'translateY(-50%)',
    color: 'white',
    padding: '20px 30px',
    fontSize: '4rem', // Aumenta o tamanho da fonte
    fontWeight: 'bold',
    textAlign: 'right',
    maxWidth: '40%',
    lineHeight: '1.2',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Removido o fundo escuro
  },
  navButtonLeft: {
    position: 'absolute',
    top: '50%',
    left: '20px',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    border: 'none',
    fontSize: '3rem',
    color: '#fff',
    cursor: 'pointer',
    zIndex: 1,
  },
  navButtonRight: {
    position: 'absolute',
    top: '50%',
    right: '20px',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    border: 'none',
    fontSize: '3rem',
    color: '#fff',
    cursor: 'pointer',
    zIndex: 1,
  },
};

export default Carousel;
