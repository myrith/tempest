'use strict';

module.exports = function(gulp, config, plugins) {
  return function() {
    plugins.livereload.listen();
    gulp.watch('src/img/**/*.*', ['build:images']);
  }
}
