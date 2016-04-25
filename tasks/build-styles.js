'use strict';

module.exports = function(gulp, config, plugins) {
  return function() {
    return gulp.src('src/css/**/*.css')
      .pipe(plugins.autoprefixer('last 2 version'))
      .pipe(gulp.dest('dist/assets/css'))
      .pipe(plugins.rename({
        suffix: '.min'
      }))
      .pipe(plugins.cssnano())
      .pipe(gulp.dest('dist/assets/css'))
      .pipe(plugins.notify({
        message: 'Styles task complete'
      }));
  }
}
