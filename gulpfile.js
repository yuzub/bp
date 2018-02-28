var gulp = require('gulp');

gulp.task('default', defaultTask);

function defaultTask(done) {
  // place code for your default task here
  done();
}

gulp.task('hello-world', function(done) {
  console.log('Our first gulp task!');
  done();
})