const DEST = 'www/dist';
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const gutil = require('gulp-util');


// load and compress css
gulp.task('js', () => {
  let jsPath = ['www/app.js', 'www/pages/**/*.js'];
  let uglify = require('gulp-uglify');
  let babelify = require('babelify');
  let browserify = require('browserify');
  let glob = require('glob');
  let source = require('vinyl-source-stream');
  let buffer = require('vinyl-buffer');

  jsPath.reduce((ret, sec) => ret.concat(glob.sync(sec)), []).forEach(dir => {
    let path = dir.replace('www/', '').split('/');
    let name = path.pop();
    path = path.length ? path.join('/') : '';

    browserify({ entries: dir, debug: true })
      .transform(babelify)
      .bundle()
      .pipe(plumber())
      .pipe(source(name))

      // TODO: uncomment to compress your source code
      //.pipe(buffer())
      //.pipe(uglify())
      .pipe(gulp.dest(DEST + '/' + path));
  });
});

// load css with CSSNext
let cssPath = ['www/app.css', 'www/pages/*.css'];
gulp.task('css', () => {
  let cssnext = require('gulp-cssnext');

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
let jslintPath = ['www/app.js', 'www/pages/**/*.js', 'gulpfile.js'];
gulp.task('lint', () => {
  var jshint = require('gulp-jshint');

  return gulp.src(jslintPath)
    .pipe(plumber())
    .pipe(jshint({ esnext: true }));
});


// clean dist dir
gulp.task(
  'clean',
  () => gulp.src(['www/dist'], { read: false })
      .pipe(require('gulp-clean'))
);


// create http server
gulp.task('server', () => {
  let http = require('http');
  let static = require('node-static');

  http.createServer((req, res) => {
    if(['/cordova.js', '/favicon.ico'].indexOf(req.url) !== -1) {
      res.setHeader('Content-Type', req.url.match(/\.js$/) ? 'text/javascript' : 'image/png');
      return res.end();
    }

    req.addListener('end', () => {
      new static.Server('./www').serve(req, res, (err, result) => {
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
gulp.task('dev', ['js', 'css', 'server'], () => {
  gulp.watch(jslintPath, ['js', 'lint']);
  gulp.watch(cssPath, ['css']);
});