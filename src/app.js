const express = require('express');
const config = require('./config.js');
const clientes = require('./modulos/cliente/rutas.js');

const app = express();

// Configuración
app.set('port', config.app.port);


// Rutas
app.use('/api/clientes', clientes);

module.exports = app;







