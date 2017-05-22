var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    pump =  require('pump');

//CONVERT SASS  
gulp.task('styles', function() {
    gulp.src('assets/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/css'));
});

//MINIFY CSS
gulp.task('minify', function() {
  return gulp.src('assets/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

//COMPRESS JS
gulp.task('compress', function (cb) {
  pump([
        gulp.src('assets/js/*.js'),
        uglify(),
        gulp.dest('dist/js')
    ],
    cb
  );
});

//WATCHING
gulp.task('watch',function() {
    gulp.watch('assets/scss/*.scss',['styles']);
    gulp.watch('assets/css/*.css', ['minify']);
    gulp.watch('assets/js/*.js', ['compress']);
});

gulp.task('default', ['watch', 'minify', 'compress']);