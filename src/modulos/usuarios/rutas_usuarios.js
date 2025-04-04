const express = require('express');
const router = express.Router();
const respuesta = require('../../red/respuestas.js');
const controlador = require('./controlador.js');

// Obtener todos los usuarios
router.get('/', async function(req, res) {
   try {
      const items = await controlador.todos();
      respuesta.success(req, res, 200, items);
   } catch (error) {
      respuesta.error(req, res, 500, error);
   }
});

// Obtener un usuario por ID
router.get('/:id', async function(req, res) {
   try {
      const item = await controlador.uno(req.params.id);
      respuesta.success(req, res, 200, item);
   } catch (error) {
      respuesta.error(req, res, 500, error);
   }
});

// Registro de nuevo usuario (sign up)
router.post('/signup', async function(req, res) {
   try {
      const result = await controlador.signup(req.body);
      respuesta.success(req, res, 201, {
         mensaje: 'Usuario registrado correctamente',
         id: result.insertId
      });
   } catch (error) {
      let statusCode = 500;
      if (error.message === 'El usuario ya existe') {
         statusCode = 409; // Conflict
      }
      respuesta.error(req, res, statusCode, error.message);
   }
});

// Inicio de sesión (login)
router.post('/login', async function(req, res) {
   try {
      const { email, password } = req.body;
      if (!email || !password) {
         return respuesta.error(req, res, 400, 'Email y contraseña son requeridos');
      }
      
      const usuario = await controlador.login(email, password);
      respuesta.success(req, res, 200, {
         mensaje: 'Login exitoso',
         usuario: usuario
      });
   } catch (error) {
      let statusCode = 500;
      if (error.message === 'Usuario no encontrado' || error.message === 'Contraseña incorrecta') {
         statusCode = 401; // Unauthorized
      }
      respuesta.error(req, res, statusCode, error.message);
   }
});

// Actualizar usuario
router.put('/:id', async function(req, res) {
   try {
      const result = await controlador.actualizar(req.params.id, req.body);
      respuesta.success(req, res, 200, {
         mensaje: 'Usuario actualizado correctamente'
      });
   } catch (error) {
      respuesta.error(req, res, 500, error);
   }
});

// Eliminar usuario
router.delete('/:id', async function(req, res) {
   try {
      const result = await controlador.eliminar(req.params.id);
      respuesta.success(req, res, 200, {
         mensaje: 'Usuario eliminado correctamente'
      });
   } catch (error) {
      respuesta.error(req, res, 500, error);
   }
});

module.exports = router;
