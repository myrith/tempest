'use strict';

module.exports = function(gulp, config, plugins) {
  return function() {
    gulp.watch('src/css/**/*.css', ['build:styles']);
  }
}
