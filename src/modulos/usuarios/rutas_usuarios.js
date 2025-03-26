const express = require('express');

const router = express.Router(); // Instancia de metodo Router() de Express

/* 
   En base a los parametros root ('/') o cualquier sección que tengamos, 
   muestran en JSON un mensaje de un funcionamiento correcto del servidor
*/

router.get('/', (req, res) => {
   res.json('Hola soy ruta usuario')
})

router.get('/updates', (req, res) => {
   res.json('Usuario actualizado')
})

module.exports = router
