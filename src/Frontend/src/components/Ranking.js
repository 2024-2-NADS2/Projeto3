import React from 'react';

const Ranking = () => {
    const imgUrl = '/img/ranking/ranking.png';  // Caminho corrigido

    return (
        <section className="ranking">
            <h2>RANKING DE ALIMENTOS DOADOS</h2>
            <div className="ranking-image">
                <img src={imgUrl} alt="Alimentos doados" />
            </div>
        </section>
    );
};

export default Ranking;


