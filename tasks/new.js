'use strict';

const argv = require('minimist')(process.argv.slice(2)),
  fs = require('fs'),
  moment = require('moment');

module.exports = function(gulp, config, plugins) {
  return function() {
    if (argv.name) {
      let file = `static/posts/${moment().format('YYYY-MM-DD-HH-mm')}-${argv.name}.md`;
      fs.writeFileSync(file, '')
    } else {
      console.log('Post name is required.');
    }
  };
};
