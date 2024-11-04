const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 5000;

// Configuração do CORS para permitir acesso do frontend
app.use(cors());
app.use(bodyParser.json());

// Conectando ao SQLite
const db = new sqlite3.Database('./sabor_solidario.db', (err) => {
  if (err) {
    console.error('Erro ao abrir o banco de dados', err.message);
  } else {
    console.log('Banco de dados SQLite conectado');
    db.run(`
      CREATE TABLE IF NOT EXISTS formulario (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        email TEXT,
        mensagem TEXT
      )
    `);
  }
});

// Rota para receber os dados do formulário
app.post('/api/formulario', (req, res) => {
  const { nome, email, mensagem } = req.body;
  const query = `INSERT INTO formulario (nome, email, mensagem) VALUES (?, ?, ?)`;

  db.run(query, [nome, email, mensagem], function (err) {
    if (err) {
      console.error(err.message);
      res.status(500).send('Erro ao salvar no banco de dados');
    } else {
      res.status(200).send('Formulário enviado com sucesso');
    }
  });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
