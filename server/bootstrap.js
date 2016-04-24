'use strict';

const config = require('./config'),
  express = require('express');

module.exports = function bootstrap(app) {

  app.use('/*', function (req, res) {
    console.log('this');
    return express.static('client/display');
  });

  return {
    start: function start() {
      app.listen(config.port, function() {
        console.log(`Server listening at port ${config.port}`);
      });
    }
  };
};
