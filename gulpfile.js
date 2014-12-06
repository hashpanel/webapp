var gulp = require('gulp');
var source = require('vinyl-source-stream');
var transform = require('vinyl-transform');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify'); 
var concat = require('gulp-concat');
var less = require('gulp-less');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var bower = require('main-bower-files');
var buffer = require('vinyl-buffer');
 
gulp.task('browserify', function() {
  var bundler = browserify({
    entries: bower({ base: './bower_components', filter: /\.js*$/ }).concat([
      './src/index.js'
    ]),
    transform: [ reactify ],
    debug: true,
    cache: { },
    packageCache: { },
    fullPaths: true
  });

  var watcher = watchify(bundler);
    
  return watcher.on('update', function () {
    var t0 = Date.now();
      watcher.bundle()
        .pipe(source('hashpanel.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./www/'));

      console.log('js updated;', (Date.now() - t0) + 'ms');
    })
    .bundle()
    .pipe(source('hashpanel.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./www/'));
});

gulp.task('less', function () {
  return gulp.src('./src/styles/index.less')
    .pipe(less())
    .pipe(concat('hashpanel.css'))
    .pipe(gulp.dest('./www/'));
});

gulp.task('watch', function () {
  gulp.watch([ 'src/styles/*.less' ], [ 'less' ]);
});

gulp.task('default', ['browserify', 'less', 'watch']);
