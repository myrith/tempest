'use strict';

const express = require('express');

module.exports = function(app) {
  let route = express.Router();

  route
    .get('/api/posts', all);

  route
    .get('/api/posts/:title', single);

  route
    .get('/*', express.static('public'));

  app.use(route);

}

function all(req, res) {
  res.json([])
}

function single(req, res) {
  res.json({})
}
