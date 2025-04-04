const baseDeDatos = require('../../BD/mysql');
const bcrypt = require('bcrypt'); // Dependencia: npm install bcrypt | Permite hacer uso de hash en contraseñas

const TABLA = 'usuarios';

// Obtener todos los usuarios
function todos() {
   return baseDeDatos.todos(TABLA);
}

// Obtener un usuario por ID
function uno(id) {
   return baseDeDatos.uno(TABLA, id);
}

// Función para el registro (signup)
async function signup(body) {
   // Verificar si el usuario ya existe
   const usuarioExistente = await baseDeDatos.query(TABLA, { email: body.email });
   if (usuarioExistente) {
      throw new Error('El usuario ya existe');
   }

   // Encriptar la contraseña
   const saltRounds = 10;
   const hashedPassword = await bcrypt.hash(body.password, saltRounds);
   
   // Preparar datos para insertar
   const usuario = {
      nombre: body.nombre,
      email: body.email,
      password: hashedPassword,
      fecha_registro: new Date()
   };

   // Insertar en la base de datos
   return baseDeDatos.agregar(TABLA, usuario);
}

// Función para el inicio de sesión (login)
async function login(email, password) {
   // Buscar usuario por email
   const usuario = await baseDeDatos.query(TABLA, { email: email });
   
   if (!usuario) {
      throw new Error('Usuario no encontrado');
   }
   
   // Verificar contraseña
   const passwordMatch = await bcrypt.compare(password, usuario.password);
   
   if (!passwordMatch) {
      throw new Error('Contraseña incorrecta');
   }
   
   // Si todo es correcto, devolver datos del usuario (excepto la contraseña)
   const { password: _, ...datosUsuario } = usuario;
   return datosUsuario;
}

// Actualizar usuario
function actualizar(id, body) {
   body.id = id;
   
   // Si incluye password, encriptarla
   if (body.password) {
      const saltRounds = 10;
      body.password = bcrypt.hashSync(body.password, saltRounds);
   }
   
   return baseDeDatos.actualizar(TABLA, body);
}

// Eliminar usuario
function eliminar(id) {
   return baseDeDatos.eliminar(TABLA, id);
}

module.exports = { todos, uno, signup, login, actualizar, eliminar };