const express = require('express');

const db = require('./src/db');
const estoqueRouter = require('./src/routers/estoqueRouter');

// cria uma aplicação a partir do construtor do express
const app = express();

app.use(express.urlencoded({extended: true}));

app.use('/', estoqueRouter);

// sincronizando Banco de dados
db.sync(()=>{
    console.log('DB conectado.');
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});