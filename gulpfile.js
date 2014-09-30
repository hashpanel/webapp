var browserify = require('browserify');
var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
//var watch = require('gulp-watch');
var stringify = require('stringify');
var livereload = require('gulp-livereload');
var express = require('express');
var app = express();
var path        = require('path');

var paths = {
  interest: ['src/js/**/*.js','app.js','miner/**.hbs']
};


var getBundleName = function () {
  var name = require('./package.json').name;
  //return version + '.' + name + '.' + 'min';
  return name + '.' + 'min';
};

gulp.task('compilejs', function() {

  var bundler = browserify({
    entries: ['./app.js'],
    debug: true
  }).transform(stringify(['.hbs', '.handlebars']));


//#TODO Error HANDLING

  var bundle = function() {
    return bundler
      .bundle()
      .pipe(source(getBundleName() + '.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/js/'))
      .on('error', gutil.log)
      .on('error', gutil.beep);
  };

  return bundle();
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.interest, ['compilejs']).on('change', livereload.changed);

});

gulp.task('server', function() {
  app.use(express.static(path.resolve('./')));
  app.listen(8000);
  gutil.log('Listening on port: 8000');
});


// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'compilejs', 'server']);
