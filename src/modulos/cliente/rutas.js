const express = require('express');

const router = express.Router(); // Instancia de metodo Router() de Express

const respuesta = require('../../red/respuestas.js')

const controlador = require('./controlador.js')

/* 
   En base a los parametros root ('/') o cualquier sección que tengamos, 
   muestran en JSON un mensaje de un funcionamiento correcto del servidor
*/

// Ruta princpal para acceder a la seccion "clientes" de la API
router.get('/', async function (req, res) {

   try {
      const item = await controlador.todos()
      respuesta.success(req, res, 200, item)
      
   } catch (error) {
      respuesta.error(req, res, 500, error)
   }

})

// Ruta de un solo registro por medio del ID
router.get("/:id", async function(req, res) {
   try {
       const item =await controlador.uno(req.params.id)
       respuesta.success(req, res, 200, item)
   } catch (error) {
       respuesta.error(req, res, 500, error)
       
   } 
})

router.post('/agregar', (req, res) => {
   // console.log(req.body)

   const agregar = controlador.agregar(req.body)

   respuesta.success(req, res, 200, agregar)

})

module.exports = router
