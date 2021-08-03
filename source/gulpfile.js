const gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  autoprefixer = require('gulp-autoprefixer');

gulp.task('reload', function() {
  browserSync.reload();
});

gulp.task('prefix', function() {
  gulp.src('css/style.css')
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('css/min'))
})

gulp.task('default', function() {
    browserSync.init({
      server: {
        baseDir: './'
      },
      open: false
    });
    gulp.watch('./scripts/**/*.js', ['reload']);
    gulp.watch('./**/*.html', ['reload']);
    gulp.watch('./**/*.css', ['reload', 'prefix']);
  })
