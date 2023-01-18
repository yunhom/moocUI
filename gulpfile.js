const gulp = require('gulp');
const sass = require('gulp-sass'); //sass 转成 css
const minifyCss = require('gulp-minify-css'); //对css代码进行压缩

gulp.task('sass', async function (){
  return gulp.src('components/css/**/*.scss')
  .pipe(sass())
  .pipe(minifyCss())
  .pipe(gulp.dest('dist/css'));
});





