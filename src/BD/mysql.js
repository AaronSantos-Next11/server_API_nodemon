const config = require('../config.js');
const mysql = require('mysql');

const dbconfig = {
   host: config.mysql.host,
   user: config.mysql.user,
   password: config.mysql.password,
   database: config.mysql.database
}

// console.log(dbconfig)

function conMysql() {

   conexion = mysql.createConnection(dbconfig);

   conexion.connect((err) => {
      if (err) {
         console.log('[BD err]', err)
         setTimeout(conMysql, 200)
      } 
      
      else {
         console.log('BD conectada')
      }
   })

   conexion.on('error', err => {
      console.log('[BD error]', err);

      if (err.code === 'PROTOCOL_CONNECTION_LOST') {

         conMysql()

      } else {
         
         throw err;
      }
   })
}

conMysql()

//*  Metodos para la base de datos y hacer las consultas

function todos(tabla) {
   return new Promise((resolve, reject) => {
      conexion.query(`SELECT * FROM ${tabla};`, (error, result) => {
         return error ? reject(error) : resolve(result)
      })
   })
}

// Consulta de un solo registro por medio del ID
function uno(tabla, id){
   return new Promise((resolve, reject) => {
      conexion.query(`SELECT * FROM ${tabla} WHERE id=${id} ;`, (error, result) => {
           return error ? reject(error) : resolve(result);
      });
   });
}

// Agrega un campo a la tabla
function agregar (data) {

   // const datos = {
   //    tabla: tabla,
   //    data: data
   // }

   // return (datos)
}


// Elimina un campo a la tabla
function eliminar (tabla, id) {

}

module.exports = { todos, uno, agregar, eliminar}