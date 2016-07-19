const Demo = require('../models/Demo');

var getHello = (request, reply) => {
  return reply('hello world');
};

exports.getHello = getHello;