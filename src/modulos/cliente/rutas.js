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

// Ruta que agrega un cliente
router.post('/agregar', async (req, res) => {
   try {
      const result = await controlador.agregar(req.body);
      respuesta.success(req, res, 201, {
         mensaje: 'Cliente agregado correctamente',
         id: result.insertId
      });
   } catch (error) {
      respuesta.error(req, res, 500, error);
   }
});

// Ruta que elimina por ID
router.delete('/:id', async (req, res) => {
   try {
      const result = await controlador.eliminar(req.params.id);
      respuesta.success(req, res, 200, {
         mensaje: 'Cliente eliminado correctamente'
      });
   } catch (error) {
      respuesta.error(req, res, 500, error);
   }
});

// Ruta que actualiza por ID
router.put('/:id', async (req, res) => {
   try {
      const result = await controlador.actualizar(req.params.id, req.body);
      respuesta.success(req, res, 200, {
         mensaje: 'Cliente actualizado correctamente'
      });
   } catch (error) {
      respuesta.error(req, res, 500, error);
   }
});

module.exports = router
