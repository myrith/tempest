'use strict';

const bootstrap = require('./bootstrap');

module.exports = server;

function server(app) {
  bootstrap(app).start();
}