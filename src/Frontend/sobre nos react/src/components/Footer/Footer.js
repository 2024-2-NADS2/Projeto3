import './Footer.css';
import celular from './celular.png';
import email from './email.png';
import localizacao from './localizacao.png';

function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="content-section">
        <div className="info-section">
          <a href="/sobre">
            <h3>Sobre Nós</h3>
          </a>
        </div>
        <div className="info-section">
          <a href="/termos">
            <h3>Termos de Uso</h3>
          </a>
        </div>
        <div className="info-section">
          <a href="/junte-se">
            <h3>Junte-se a Nós</h3>
          </a>
        </div>
      </div>
      <div className="contact-details">
        <div className="detail-item">
          <img src={localizacao} alt="Endereço" className="icon" />
          <div>
            <p className="detail-title">Endereço</p>
            <p>Rua Antonio Céspede, 514</p>
          </div>
        </div>
        <div className="detail-item">
          <img src={email} alt="E-mail" className="icon" />
          <div>
            <p className="detail-title">E-mail</p>
            <a href="mailto:SaborSolidario@gmail.com">SaborSolidario@gmail.com</a>
          </div>
        </div>
        <div className="detail-item">
          <img src={celular} alt="Telefone" className="icon" />
          <div>
            <p className="detail-title">Telefone</p>
            <a href="tel:(11)00000-0000">(11) 00000-0000</a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; Copyright 2024 | Sabor Solidário | Todos os direitos reservados</p>
      </div>
    </div>
  );
}

export default ContactInfo;