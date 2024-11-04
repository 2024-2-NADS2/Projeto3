import './Valores.css';
import entregando from './entregando.png'; // Imagem abaixo de "Nossos Valores"
import imagemSolidariedade from './Solidariedade.png'; // Imagem para Solidariedade
import imagemSustentabilidade from './Sustentabilidade.png'; // Imagem para Sustentabilidade
import imagemDignidade from './dignidade.png'; // Imagem para Dignidade
import imagemCompromisso from './Compromisso.png'; // Imagem para Compromisso

function Valores() {
    return (
        <div className="nossos-valores">
            <div className="titulo-container">
                <h2 className="titulo">
                    Nossos<br /> Valores
                </h2>
                <div className="imagem-valores">
                    <img src={entregando} alt="Valores" />
                </div>
            </div>
            <div className="valores-grid">
                <div className="valor-item">
                    <img src={imagemSolidariedade} alt="Solidariedade" className="valor-imagem" />
                    <h3>Solidariedade</h3>
                    <p>Acreditamos no poder da comunidade e na importância de cuidar uns dos outros.</p>
                    <button className="valor-button">Solidariedade</button>
                </div>
                <div className="valor-item">
                    <img src={imagemSustentabilidade} alt="Sustentabilidade" className="valor-imagem" />
                    <h3>Sustentabilidade</h3>
                    <p>Trabalhamos para reduzir o desperdício de alimentos e promover práticas de consumo consciente.</p>
                    <button className="valor-button">Sustentabilidade</button>
                </div>
                <div className="valor-item">
                    <img src={imagemDignidade} alt="Dignidade" className="valor-imagem" />
                    <h3>Dignidade</h3>
                    <p>Ajudamos a garantir que todas as pessoas tenham acesso a refeições de qualidade, servidas com respeito e dignidade.</p>
                    <button className="valor-button">Dignidade</button>
                </div>
                <div className="valor-item">
                    <img src={imagemCompromisso} alt="Compromisso" className="valor-imagem" />
                    <h3>Compromisso</h3>
                    <p>Mantemos um engajamento constante com as comunidades, buscando entender suas necessidades e adaptar nossas ações para atendê-las com eficiência.</p>
                    <button className="valor-button">Compromisso</button>
                </div>
            </div>
        </div>
    );
}

export default Valores;