const Hapi = require('hapi');
const mongorito = require('mongorito');
const Utils = require('./app/utils/Utils');

const server = new Hapi.Server();
server.connection({ 
  host: 'localhost', 
  port: 8000 
});

server.ext('onRequest', function (request, reply) {
  Utils.log('request', `(${new Date()}) ${request.method.toUpperCase()} ${request.path}`);
  return reply.continue();
});

require('./app/routes')(server);

// Start the server
mongorito.connect('localhost:27000/testdb').then((conn, err) => {
  if(err) {
    Utils.log('mongodb', 'Could not connect to DDBB');
    throw err;
  }
  server.start((err) => {
    if (err) {
      throw err;
    }
    Utils.log('app', 'Started on ' + server.info.uri);
  });
})