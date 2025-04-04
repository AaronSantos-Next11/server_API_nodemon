const baseDeDatos = require('../../BD/mysql')
const TABLA = 'clientes';

//*  Metodos para la base de datos y hacer las consultas
function todos() {
 return baseDeDatos.todos(TABLA)
}

// Consulta de un solo registro por medio del ID
function uno(id) {
   return baseDeDatos.uno(TABLA, id)
}

// Agrega un campo a la tabla
function agregar(body) {
   return baseDeDatos.agregar(TABLA, body)
}

// Elimina un campo a la tabla
function eliminar(id) {
   return baseDeDatos.eliminar(TABLA, id);
}

// Actualiza un campo en la tabla
function actualizar(id, body) {
   body.id = id;
   return baseDeDatos.actualizar(TABLA, body);
}

module.exports = { todos, uno, agregar, eliminar, actualizar}