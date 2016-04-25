'use strict';

module.exports = function(gulp, config, plugins) {
  return function() {
    return gulp.src('src/img/**/*')
      .pipe(plugins.imagemin({
        optimizationLevel: 3,
        progressive: true,
        interlaced: true
      }))
      .pipe(gulp.dest('dist/assets/img'))
      .pipe(plugins.notify({
        message: 'Images task complete'
      }));
  }
}
