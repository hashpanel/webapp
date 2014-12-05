var gulp = require('gulp');
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify'); 
var concat = require('gulp-concat');
var less = require('gulp-less');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
 
gulp.task('browserify', function() {
  var bundler = browserify({
    entries: ['./src/index.js'],
    transform: [reactify],
    debug: true,
    cache: { }, packageCache: { }, fullPaths: true
  });
  var watcher = watchify(bundler);

  return watcher.on('update', function () {
      var t0 = Date.now();
      watcher.bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./www/'));

      console.log('updated build. time:', (Date.now() - t0) + 'ms');
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./www/'));
});

gulp.task('less', function () {
  return gulp.src('./src/styles/index.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('./www/'));
});

gulp.task('watch', function () {
  gulp.watch([
      './src/styles/*.less'
    ],
    [ 'less' ]
    );
});

gulp.task('default', ['browserify', 'less', 'watch']);
