import './SobreNo.css'
import maca from './maca.png'

function SobreNos() {
  return (
    <div className="sobre-nos">
      <h2 className="titulo">Sobre Nós</h2>
      <div className="sobre-nos-content">
        <div className="sobre-nos-text">
          <p>
            No Sabor Solidário, acreditamos que a solidariedade pode transformar vidas.
            Nosso objetivo é conectar ONGs que precisam de doações com beneficiários que buscam apoio.
            Criamos uma plataforma simples e eficiente que permite que as ONGs disponibilizem horários para receber doações,
            enquanto os beneficiários podem escolher o melhor momento para retirar o que precisam.
          </p>
        </div>
        <div className="sobre-nos-image">
          <img src={maca} alt="Sabor Solidário" className="vdd" />
        </div>
      </div>
    </div>
  );
}

export default SobreNos;
