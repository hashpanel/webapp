var path = require('path');
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
var logger = require('gulp-logger');
var s3 = require('gulp-s3');

var bundler = browserify({
  entries: [
    './js/index.js'
  ],
  transform: [ reactify ],
  debug: true,
  cache: { },
  packageCache: { },
  fullPaths: true
});

var config = {
  bowerDir: './bower_components'
};
 
gulp.task('browserify-lib', function() {
  return browserify({
      entries: bower({ base: './bower_components', filter: /\.js*$/ }).concat([
        './lib/index.js'
      ]),
      transform: [ reactify ],
      debug: true,
      cache: { },
      packageCache: { },
      fullPaths: true
    })
    .bundle()
    .pipe(source('lib.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./www/'));
});

gulp.task('browserify-app', function () {
  return bundler
    .bundle()
    .pipe(source('hashpanel.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./www/'));
});

gulp.task('browserify-app-watch', function () {
  var watcher = watchify(bundler);
    
  return watcher.on('update', function () {
      var t0 = Date.now();
      watcher.bundle()
        .pipe(source('hashpanel.js'))
        .pipe(buffer())
        .pipe(logger({
          before: 'Change detected, recompiling...',
          after: 'Complete'
        }))
        .pipe(gulp.dest('./www/'));
    })
    .bundle()
    .pipe(source('hashpanel.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./www/'));
});

gulp.task('less', function () {
  return gulp.src('./css/index.less')
    .pipe(less())
    .pipe(concat('hashpanel.css'))
    .pipe(gulp.dest('./www/'));
});

gulp.task('less-watch', function () {
  gulp.watch([ 'css/*.less' ], [ 'less' ]);
});

gulp.task('s3-deploy', function () {
  gulp.src('www/**')
    .pipe(s3({
      key: process.env.AWS_ACCESSID,
      secret: process.env.AWS_SECRETKEY,
      bucket: 'www.hashpanel.io'
    }));
});

gulp.task('icons', function () {
  gulp.src([
      './node_modules/font-awesome/fonts/**.*',
      './node_modules/bootstrap/fonts/**.*'
    ])
    .pipe(gulp.dest('www/fonts'));
});

gulp.task('watch', ['browserify-lib', 'icons', 'browserify-app', 'browserify-app-watch', 'less', 'less-watch']);
gulp.task('build', ['browserify-lib', 'icons', 'browserify-app', 'less' ]);
gulp.task('deploy', [ 'build', 's3-deploy' ]);
