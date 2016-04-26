'use strict';

const argv = require('minimist')(process.argv.slice(2)),
  fs = require('fs'),
  moment = require('moment');

module.exports = function(gulp, config, plugins) {
  return function() {
    if (argv.name) {
      let file = `static/${moment().format('YYYY-MM-DD-HH-mm')}-${argv.name}.md`;
      fs.writeFileSync(file, '')

      // [{
      //   type: 'module',
      //   dist: `src/${argv.name}.js`
      // }, {
      //   type: 'test',
      //   dist: `tests/${argv.name}.spec.js`
      // }, {
      //   type: 'task',
      //   dist: `tasks/test-${argv.name}.js`
      // }].map((file) => {
      //   fs.writeFileSync(
      //     `./${file.dist}`,
      //     filter(fs.readFileSync(`./misc/${file.type}.tpl`, 'utf8'))
      //   )
      // })
    } else {
      console.log('Post name is required.');
    }
  };
};
