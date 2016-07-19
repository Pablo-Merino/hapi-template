var gulp = require('gulp');
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');

gulp.task('lint', function() {
  return gulp.src('./app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('start', ['lint'], function () {
  nodemon({
    script: 'index.js',
    ext: 'js',
    env: { 'NODE_ENV': 'local' },
    tasks: ['lint']
  }).on('restart', function () {
    console.log('server restarted!')
  });
});

gulp.task('default', ['start']);