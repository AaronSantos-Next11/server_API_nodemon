const express = require('express');

const router = express.Router(); // Instancia de metodo Router() de Express

const respuesta = require('../../red/respuestas.js')

/* 
   En base a los parametros root ('/') o cualquier sección que tengamos, 
   muestran en JSON un mensaje de un funcionamiento correcto del servidor
*/

router.get('/', (req, res) => {
   res.json('Hola soy cliente')
})

router.get('/updates', (req, res) => {
   // res.json('Cliente actualizado')
   respuesta.error(req, res, 500)
})

module.exports = router
