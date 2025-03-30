const baseDeDatos = require('../../BD/mysql')

const TABLA = 'clientes';

//*  Metodos para la base de datos y hacer las consultas
function todos (tabla) {
 return baseDeDatos.todos(TABLA)
}

// Consulta de un solo registro por medio del ID
function uno (tabla, id) {

}

// Agrega un campo a la tabla
function agregar (tabla, data) {

}


// Elimina un campo a la tabla
function eliminar (tabla, id) {

}

module.exports = { todos, uno, agregar, eliminar}