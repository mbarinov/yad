var gulp = require('gulp'),
    server = require('gulp-server-livereload'),
    stylus = require('gulp-stylus'),
    autoprefixer = require('autoprefixer-stylus'),
    rimraf = require('rimraf'),
    runSequence = require('run-sequence'),
    handlebars = require('gulp-handlebars'),
    wrap = require('gulp-wrap'),
    declare = require('gulp-declare'),
    stripDebug = require('gulp-strip-debug'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    jsdoc = require("gulp-jsdoc");

var scriptsPaths = [
    'src/**/*.js',
    'node_modules/handlebars/dist/handlebars.js',
    'node_modules/jquery/dist/jquery.js',
    'node_modules/q/q.js'
];

gulp.task('jsdoc', function () {
    gulp.src("src/*.js")
    .pipe(jsdoc('./docs',null,null,{
            showPrivate: true,
            cleverLinks: true,
            outputSourceFiles: true
        }))
});

gulp.task('scripts', function () {
   gulp.src(scriptsPaths)
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(concat('yad.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('scripts:watch', function () {
    gulp.watch('./src/**/*.js', ['scripts']);
});

gulp.task('templates', function(){
    gulp.src('src/**/*.hbs')
        .pipe(handlebars())
        .pipe(wrap('Handlebars.template(<%= contents %>)'))
        .pipe(declare({
            namespace: 'YAD.templates',
            noRedeclare: true
        }))
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('templates:watch', function () {
    gulp.watch('./src/**/*.hbs', ['templates']);
});

gulp.task('styles', function () {
    return gulp.src('./src/dropdown.styl')
        .pipe(stylus({
            use: [
                autoprefixer('last 2 versions', 'ie 8', 'ie 9')
            ]
        }))
        .pipe(gulp.dest('dist'))
});

gulp.task('styles:watch', function () {
    gulp.watch('./src/**/*.styl', ['styles']);
});

gulp.task('clean', function (cb) {
    rimraf('dist', cb);
});

gulp.task('server', function () {
    gulp.src('.')
        .pipe(server({
            livereload: true,
            directoryListing: false
        }));
});

gulp.task('default', function() {
    runSequence(['clean'],
                ['styles'],
                ['styles:watch'],
                ['templates'],
                ['templates:watch'],
                ['scripts'],
                ['scripts:watch'],
                ['server'],
                ['jsdoc']
    );
});