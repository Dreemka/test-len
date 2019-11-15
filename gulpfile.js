var browserSync = require('browser-sync');
           gulp = require('gulp'),
           sass = require('gulp-sass'),
           js = require('gulp-concat-js'),

gulp.task('sass', function(){
  return gulp.src('src/sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('pub/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function() {
  return gulp.src('src/js/*.js')
  .pipe(gulp.dest('pub/js'))
  .pipe(browserSync.reload({ stream: true }))
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'pub'
    },
    notify: false
  })
});

gulp.task('html', function() {
  return gulp.src('pub')
  .pipe(browserSync.reload({ stream: true }))
});

gulp.task('watch', function() {
  gulp.watch('src/sass/*.sass', gulp.parallel('sass'));
  gulp.watch('src/js/*.js', gulp.parallel('js'));
  gulp.watch('pub/*.html', gulp.parallel('html') )
});

gulp.task( 'default', gulp.parallel( 'sass', 'js', 'browser-sync', 'watch') );
