'use strict';

module.exports = function(gulp, config, plugins) {
  return {
    deps: [
      'build:images',
      'build:scripts',
      'build:styles',
      'build:views'
    ],
    params: [],
    fn: function() {}
  }
}
