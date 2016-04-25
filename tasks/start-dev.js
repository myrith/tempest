'use strict';

module.exports = function(gulp, config, plugins) {
  return {
    deps: [
      'watch',
    ],
    params: [],
    fn: function() {
      plugins.livereload({
        start: true
      });
      plugins.nodemon({
        script: 'index.js',
        ignore: [
          'bower_components',
          'dist',
          'src',
          'static',
          'tasks',
          'tests'
        ],
        ext: 'html js'
      }).on('restart', function() {
        gulp.src('index.js')
          .pipe(plugins.livereload())
          .pipe(plugins.notify('Reloading page, please wait...'));
      })
    }
  }
}
