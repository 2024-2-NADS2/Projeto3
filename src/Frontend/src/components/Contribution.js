// src/components/Contribution.js
import React from 'react';

const Contribution = () => {
    return (
        <section className="contribution-section">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <img src="public/img/imagens a parte/pexels-rdne-6646904 1.png" alt="Coleta e Distribuição de Alimentos" />
                            <h3>COLETA E DISTRIBUIÇÃO DE ALIMENTOS</h3>
                            <p>Nosso processo de distribuição envolve a coleta de alimentos, seu armazenamento seguro e a entrega direta às famílias em necessidade, garantindo que cada doação faça uma diferença significativa.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="public/img/imagens a parte/pexels-jonathan-borba-1831238 1.png" alt="Como Funciona" />
                            <h3>COMO FUNCIONA</h3>
                            <p>Ao contribuir com alimentos não perecíveis, você ajuda a abastecer nossa rede de entidades parceiras que atuam na distribuição para as comunidades vulneráveis.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="public/img/imagens a parte/pexels-rdne-6646910 1.png" alt="Seja Um Voluntário" />
                            <h3>SEJA UM VOLUNTÁRIO</h3>
                            <p>Além de doar alimentos, você também pode se juntar a nós como voluntário, ajudando a organizar e distribuir as doações.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contribution;
