var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer')
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    browserSync = require('browser-sync').create();

//CONVERT SASS  
gulp.task('sass', function () {
    gulp.src('assets/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/css'))
});

//MINIFY CSS
gulp.task('minify', function () {
    return gulp.src('assets/css/*.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
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

// //BROWSER SYNC
// gulp.task('browser-sync', function () {
//     browserSync.init({
//         server: {
//             baseDir: "./dist"
//         }
//     });
// });

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    
        browserSync.init({
            server: "./dist"
        });
    
        gulp.watch('assets/scss/*.scss', ['sass'])
        gulp.watch('assets/css/*.css', ['minify']).on('change', browserSync.reload);
        gulp.watch('assets/js/*.js', ['compress']);
        gulp.watch("dist/*.html").on('change', browserSync.reload);
    });

// //WATCHING
// gulp.task('watch', ['browser-sync'], function () {
//     gulp.watch('assets/scss/*.scss', ['sass'])
//     gulp.watch('assets/css/*.css', ['minify']).on('change', browserSync.reload);
//     gulp.watch('assets/js/*.js', ['compress']);
//     gulp.watch("dist/*.html").on('change', browserSync.reload);
// });

// gulp.task('default', ['watch', 'minify', 'compress']);

gulp.task('default', ['serve']);