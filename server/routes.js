'use strict';

const express = require('express'),
  fs = require('fs');

module.exports = function(app) {
  let route = express.Router();

  route
    .get('/api/posts', (req, res) => {
      let posts = fs.readdirSync('static').map((post) => {
        return {
          date: post.slice(0, 10),
          title: post.slice(11, post.length - 3).split('-').join(' ')
        };
      });
      res.json(posts);
    });

  route
    .get('/api/posts/:title', (req, res) => {
      if (req.params.title) {
        let post = fs.readFileSync(`static/${req.params.title}.md`, 'utf-8');
        res.json(post)
      } else {
        res.status(404).json({
          message: 'Not found'
        });
      }
    });

  route
    .get('/*', express.static('dist'));

  app.use(route);

};
