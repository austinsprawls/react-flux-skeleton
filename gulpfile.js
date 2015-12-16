/**
 * Created by austinsprawls on 12/16/15.
 */
var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    babelify = require('babelify');

var paths = {
  index: ['src/js/index.jsx'],
  jsx: ['src/js/**/*.jsx']
};

gulp.task('jsx', function () {
  browserify(paths.index)
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./src/'));
});

gulp.task('watch', function () {
  gulp.watch(paths.jsx, ['jsx']);
});

gulp.task('default', ['watch', 'jsx']);
