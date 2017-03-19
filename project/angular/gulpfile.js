var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

// 开启Express服务
gulp.task('nodemon', function(cb) {
  var started = false;
  return nodemon({
    script: './app'
  }).on('start', function() {
    if (!started) {
      cb();
      started = true;
    }
  });
});

gulp.task('default', ['nodemon'], function() {
  console.log('default')
});
