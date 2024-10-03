// src/components/Carousel.js
import React, { useState } from 'react';

const Carousel = () => {
    const [index, setIndex] = useState(0);
    const images = [
        "public/img/carrossel/cadadoacao.jpg",
        "public/img/carrossel/contribuapara.jpg",
        "public/img/carrossel/conexaoentre.jpg"
    ];

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <section className="hero">
            <div className="slider">
                <div className="carousel" style={{ transform: `translateX(-${index * 100}%)` }}>
                    {images.map((img, idx) => (
                        <div className="carousel-item" key={idx}>
                            <img src={img} alt={`Cesta de Alimentos ${idx + 1}`} />
                        </div>
                    ))}
                </div>
                <button className="carousel-button prev" onClick={prevSlide}>‹</button>
                <button className="carousel-button next" onClick={nextSlide}>›</button>
            </div>
            {/* Stats Section */}
            <div className="stats">
                <div className="stat-item">
                    <h3>12.58 MILHÕES</h3>
                    <p>TONELADAS DE ALIMENTOS SÃO DESPERDIÇADOS POR ANO NO BRASIL</p>
                </div>
                <div className="stat-item">
                    <h3>125.2 MILHÕES</h3>
                    <p>DE BRASILEIROS ESTÃO EM SITUAÇÃO DE INSEGURANÇA ALIMENTAR</p>
                </div>
                <div className="stat-item">
                    <h3>60 KG</h3>
                    <p>DE COMIDA SÃO DESPERDIÇADOS POR CADA BRASILEIRO POR ANO</p>
                </div>
                <div className="stat-item2">
                    <p>Dados do relatório FAO de 2021 e Rede Brasileira de Pesquisa em Soberania e Segurança Alimentar e Nutricional (Rede PENSSAN)</p>
                </div>
            </div>
        </section>
    );
};

export default Carousel;
