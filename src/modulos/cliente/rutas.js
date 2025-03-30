const express = require('express');

const router = express.Router(); // Instancia de metodo Router() de Express

const respuesta = require('../../red/respuestas.js')

const controlador = require('./controlador.js')

/* 
   En base a los parametros root ('/') o cualquier sección que tengamos, 
   muestran en JSON un mensaje de un funcionamiento correcto del servidor
*/

// router.get('/', (req, res) => {
//    res.json('Hola soy cliente')
// })

// router.get('/updates', (req, res) => {
//    // res.json('Cliente actualizado')
//    respuesta.error(req, res, 500)
// })

router.get('/', (req, res) => {

   const consult = controlador.todos()

   respuesta.success(req, res, 200, consult)
})

router.post('/agregar', (req, res) => {
   console.log(req.body)
})

module.exports = router
