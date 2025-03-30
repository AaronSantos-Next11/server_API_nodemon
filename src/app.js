const express = require('express');
const config = require('./config.js');
const clientes = require('./modulos/cliente/rutas.js');
const usuarios = require('./modulos/usuarios/rutas_usuarios.js')

const app = express(); // Instancia de Express en este archivo

app.use(express.json());

app.set('port', config.app.port);// Enlace o conexión al puerto asignado en config.js


// Rutas que podemos acceder en el navegador o en un Cliente HTTP (Postman)

app.use('/api/clientes', clientes);

app.use('/api/user', usuarios)


const mySQLdata = {
   host: process.env.MYSQL_HOST,
   user: process.env.MYSQL_USER,
   password: process.env.MYSQL_PASSWORD,
   database: process.env.MYSQL_BD
}

console.log(mySQLdata)

module.exports = app;