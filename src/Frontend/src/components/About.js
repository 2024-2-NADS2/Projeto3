// src/components/About.js
import React from 'react';

const About = () => {
    return (
        <section className="about">
            <div className="about-content">
                <h2>No Brasil, 125 milhões de pessoas vivem em situação de insegurança alimentar.</h2>
                <p>A ONG Banco de Alimentos atua desde 1998 auxiliando pessoas em situação de insegurança alimentar através do combate ao desperdício de alimentos. <strong>Mas você sabe o que significa insegurança alimentar?</strong></p>
                <p>Estado de insegurança alimentar é quando não há a garantia de que teremos o que comer na próxima refeição. Uma situação inaceitável especialmente aqui no Brasil, <strong>que bate recordes no agronegócio e desperdiçou 23,6 milhões de toneladas de alimentos em 2019.</strong></p>
                <p>Faça sua doação para a ONG Banco de Alimentos e colabore com nosso trabalho no combate ao desperdício de alimentos.</p>
                <p><strong>Hoje, através das 65 entidades sociais parceiras, ajudamos a complementar a refeição de mais de 38 mil pessoas de forma </strong>digna e nutritiva, em lugares onde muitos são esquecidos.</p>
            </div>
            <div className="about-image">
            <img src="public/img/imagensaparte/mulhercomcesta.png" alt="Mulher com cesta" />
            </div>
        </section>
    );
};

export default About;
