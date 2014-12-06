var gulp = require('gulp');
var source = require('vinyl-source-stream');
var transform = require('vinyl-transform');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify'); 
var concat = require('gulp-concat');
var less = require('gulp-less');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var bower = require('gulp-bower');
var uglify = require('gulp-uglify');
 
gulp.task('browserify', function() {
  var browserified = transform(function (filename) {
    var b = browserify(filename);
    b.transform(reactify);
    return b.bundle();
  });

  return gulp.src([
      './src/index.js',
      './bower_components/d3/d3.js',
      './bower_components/nvd3/nv.d3.js'
    ])
    .pipe(browserified)
    .pipe(concat('hashpanel.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./www/'));
});

gulp.task('less', function () {
  return gulp.src('./src/styles/index.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(concat('hashpanel.css'))
    .pipe(gulp.dest('./www/'));
});

gulp.task('watch', function () {
  gulp.watch([
      '*.less',
      '*.js',
      '*.jsx'
    ],
    { base: './src' },
    [ 'less', 'browserify' ]
    );
});

gulp.task('default', ['browserify', 'less']);
