'use strict';

module.exports = function(gulp, config, plugins) {
  return function() {
    return gulp.src('src/js/**/*.js')
      .pipe(plugins.jshint.reporter('default'))
      .pipe(plugins.concat('main.js'))
      .pipe(gulp.dest('dist/assets/js'))
      .pipe(plugins.rename({ suffix: '.min' }))
      .pipe(plugins.uglify())
      .pipe(gulp.dest('dist/assets/js'))
      .pipe(plugins.notify({
        message: 'Scripts task complete'
      }));
  }
}
