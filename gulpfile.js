const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('sass', function () {
  return gulp
    .src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
})
gulp.task('default', function() {
  gulp.watch('scss/**/*.scss', gulp.series('sass'))
})
