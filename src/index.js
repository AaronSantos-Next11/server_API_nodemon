const app = require('./app.js'); // const app = import('./app');

app.listen(app.get('port'), () => {

   console.log('Servidor escuchando en el puerto', app.get('port'));
   console.log('http://localhost:' + app.get('port') + '/api/clientes')
   console.log('http://localhost:' + app.get('port') + '/api/user')

})
