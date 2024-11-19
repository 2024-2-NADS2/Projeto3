const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contactRoutes');
const authRoutes = require('./routes/authRoutes');
const ongRoutes = require('./routes/ongRoutes');

const app = express();


const corsOptions = {
    origin: [
        'http://localhost:3001', 
        'https://frontsaborsolidario.vercel.app', 
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true, 
};
app.use(cors(corsOptions));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});


app.use('/api', contactRoutes); 
app.use('/api/auth', authRoutes); 
app.use('/api/ongs', ongRoutes); 


app.get('/', (req, res) => {
    res.status(200).send('Backend do Sabor Solidário está rodando!');
});


app.use((req, res, next) => {
    if (!['GET', 'POST', 'PUT', 'DELETE'].includes(req.method)) {
        return res.status(405).json({ error: `Método ${req.method} não permitido.` });
    }
    next();
});


app.use((req, res, next) => {
    console.error(`Rota não encontrada: ${req.method} ${req.originalUrl}`);
    res.status(404).json({ error: 'Rota não encontrada.' });
});


app.use((err, req, res, next) => {
    console.error('Erro interno do servidor:', err.stack);
    res.status(500).json({ error: 'Erro interno do servidor.' });
});

module.exports = app;
