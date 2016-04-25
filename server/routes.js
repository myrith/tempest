'use strict';

const express = require('express'),
  fs = require('fs');

module.exports = function(app) {
  let route = express.Router();

  route
    .get('/api/posts', all);

  route
    .get('/api/posts/:title', single);

  route
    .get('/*', express.static('dist'));

  app.use(route);

}

function all(req, res) {
  let posts = fs.readdirSync('static');
  res.json(posts);
}

function single(req, res) {
  res.json({});
}
