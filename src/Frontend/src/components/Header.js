import React from 'react';

const Header = () => {
  const imgUrl = process.env.PUBLIC_URL + '/img/imagemaparte/logo.png';

  return (
    <header>
      <div className="logo">
        <img src={imgUrl} alt="Logo Sabor Solidário" />
      </div>
      <nav>
        <ul>
          <li>
            <button
              className="link-button"
              onClick={() => console.log("Redirecionando para Rede Sabor Solidário")}
            >
              REDE SABOR SOLIDÁRIO
            </button>
          </li>
          <li>
            <a href="/junteseanos" className="junteseanos">JUNTE-SE A NÓS</a>
          </li>
          <li>
            <a href="/contatos" className="contatos">CONTATO</a>
          </li>
          <li>
            <button
              className="link-button"
              onClick={() => console.log("Redirecionando para Quero Doar")}
            >
              QUERO DOAR
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
