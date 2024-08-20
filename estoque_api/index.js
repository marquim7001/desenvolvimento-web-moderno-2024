    const express = require('express');// IMPORTA O PACOTE EXPRESS
    const db = require('./src/db');
    const estoqueRouter = require('./src/routers/estoqueRouter');

    const app = express();


    app.use ('/', estoqueRouter);

    db.sync(()=> {  
        console.log('DB conectado');
    });

    const PORT=8080;

    app.listen(PORT, ()=> {
        console.log('app rodando na porta ', PORT);
    });