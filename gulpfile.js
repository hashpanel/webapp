var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');


var paths = {
  scripts: ['src/js/**/*.js','app.js']
};


var getBundleName = function () {
  var version = require('./package.json').version;
  var name = require('./package.json').name;
  //return version + '.' + name + '.' + 'min';
  return name + '.' + 'min';
};

gulp.task('compilejs', function() {

  var bundler = browserify({
    entries: ['./app.js'],
    debug: true
  });

  var bundle = function() {
    return bundler
      .bundle()
      .pipe(source(getBundleName() + '.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .on('error', function (err){ return err;}) //error dont quit
      .pipe(gulp.dest('./dist/js/'));
  };

  return bundle();
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['compilejs']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'compilejs']);
