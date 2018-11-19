var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', defaultTask);

function defaultTask(done) {
  // place code for your default task here
  done();
}

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './src'
    }
  });

  gulp.watch(['./src/*.html', './src/css/*.css']).on('change', browserSync.reload);
});