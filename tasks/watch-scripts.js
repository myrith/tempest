'use strict';

module.exports = function(gulp, config, plugins) {
  return function() {
    gulp.watch('src/js/**/*.js', ['build:scripts']);
  }
}
