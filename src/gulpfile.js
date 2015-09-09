var DEST = 'www/dist';
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');


// load and compress css
gulp.task('js', function () {
  var jsPath = ['www/app.js', 'www/pages/**/*.js'];
  var uglify = require('gulp-uglify');
  var babelify = require('babelify');
  var browserify = require('browserify');
  var glob = require('glob');
  var source = require('vinyl-source-stream');
  var buffer = require('vinyl-buffer');

  jsPath.reduce(function(ret, sec) {
    return ret.concat(glob.sync(sec));
  }, []).forEach(function(dir) {
    var path = dir.replace('www/', '').split('/');
    var name = path.pop();
    path = path.length ? path.join('/') : '';

    browserify({ entries: dir, debug: true })
      .transform(babelify)
      .bundle()
      .pipe(plumber())
      .pipe(source(name))
      //.pipe(buffer())
      //.pipe(uglify())
      .pipe(gulp.dest(DEST + '/' + path));
  });
});

// load css with CSSNext
var cssPath = ['www/app.css', 'www/pages/*.css'];
gulp.task('css', function () {
  var cssnext = require('gulp-cssnext');

  return gulp.src(cssPath)
    .pipe(plumber())
    .pipe(cssnext({
      browsers: ['ie > 8', 'chrome > 26', 'Firefox ESR'],
      plugins: [ require('postcss-nested')],
      import: {
        path: 'www'
      }
    }))
    .pipe(gulp.dest('dist', { cwd: 'www' }));
});


// js lint with jshint
var jslintPath = ['www/app.js', 'www/pages/**/*.js', 'gulpfile.js'];
gulp.task('lint', function() {
  var jshint = require('gulp-jshint');

  return gulp.src(jslintPath)
    .pipe(plumber())
    .pipe(jshint({ esnext: true }));
});


// clean dist dir
gulp.task('clean', function () {
  var clean = require('gulp-clean');
  return gulp.src(['www/dist'], { read: false })
    .pipe(clean());
});


// create http server
gulp.task('server', function() {
  var http = require('http');
  var static = require('node-static');

  http.createServer(function(req, res) {
    if(['/cordova.js', '/favicon.ico'].indexOf(req.url) !== -1) {
      res.setHeader('Content-Type', req.url.match(/\.js$/) ? 'text/javascript' : 'image/png');
      return res.end();
    }

    req.addListener('end', function() {
      new static.Server('./www').serve(req, res, function (err, result) {
        if (!err) return;
        console.error("Error serving " + req.url + " - " + err.message);
        res.writeHead(err.status, err.headers);
        res.end();
      });
    }).resume();
  }).listen(8023);

  gutil.log('Dev Server start at: http://127.0.0.1:8023');
});


// dev env
gulp.task('dev', ['js', 'css', 'server'], function() {
  gulp.watch(jslintPath, ['js', 'lint']);
  gulp.watch(cssPath, ['css']);
});