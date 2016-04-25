'use strict';

module.exports = function(gulp, config, plugins) {
  return {
    deps: [
      'watch:images',
      'watch:scripts',
      'watch:styles',
      'watch:views',
    ],
    params: [],
    fn: function() {}
  }
}
