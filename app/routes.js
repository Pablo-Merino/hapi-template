const DemoController = require('./controllers/DemoController');

module.exports = (server) => {
  server.route({
    method: 'GET',
    path:'/demo', 
    handler: DemoController.getHello
  });
}