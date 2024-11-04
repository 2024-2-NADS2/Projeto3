import './Header.css';
import logo from './logo.png';

function Header() {
    return (
        <header>
            <div className="header">
                <div className="header-white"></div> {/* Parte branca */}
                <div className="header-green">
                    {/* Container para o conteúdo */}
                    <div className="header-container">
                        <div className="logo-section">
                            <img src={logo} alt="Sabor Solidário" className="logo" />
                        </div>
                        <nav className="nav-links">
                            <a href="#rede" className="nav-link">Rede Sabor Solidário</a>
                            <a href="#junte-se" className="nav-link">Junte-se à Nós</a>
                            <a href="#contato" className="nav-link">Contato</a>
                        </nav>
                        <div className="cta-button">
                            <button className="donate-btn">Quero Doar</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;

