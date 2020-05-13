const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer')
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const babel = require('babelify');
const browserify = require('browserify');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

//CONVERT SASS  
gulp.task('sass', function () {
    gulp.src('assets/scss/**/*.scss')
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
gulp.task('compress', function () {
    const b = browserify({
        entries: './assets/js/script.js',
        debug: true,
        transform: [babel.configure({
            presets: ['@babel/preset-env']
        })]
    });
    
    return b.bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/js/'));
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./dist"
    });

    gulp.watch('assets/scss/**/*.scss', ['sass'])
    gulp.watch('assets/css/*.css', ['minify']).on('change', browserSync.reload);
    gulp.watch('assets/js/*.js', ['compress']);
    gulp.watch("dist/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);