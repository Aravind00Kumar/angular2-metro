'use strict';

var gulp = require('gulp'),
    del = require('del')

var connect = require('gulp-connect'),
    open = require('gulp-open'),
    port = 3456;
    
var sass = require('gulp-sass');

var PATHS = {
    src: {
        js: 'src/**/*.js',
        html: 'src/**/*.html',
        sass: 'src/**/*.scss',
        css:'src/styles/*.css'
    },
    lib: [
        'node_modules/angular2/node_modules/traceur/bin/traceur-runtime.js',
        'node_modules/angular2/node_modules/rx/dist/rx.js',
        '!node_modules/systemjs/dist/*.src.js',
        'node_modules/systemjs/dist/*.js'
    ],
    dist: 'dist',
    distLib : 'dist/lib'
};


gulp.task('watch', function() {
    gulp.watch(PATHS.src.js, ['js']);
    gulp.watch(PATHS.src.html, ['html']);
    gulp.watch(PATHS.src.css, ['css']);
    gulp.watch(PATHS.src.sass, ['sass']);
});

gulp.task('js', function() {
    return gulp.src(PATHS.src.js)
        .pipe(gulp.dest(PATHS.dist));
});

gulp.task('html', function() {
    return gulp.src(PATHS.src.html)
        .pipe(gulp.dest(PATHS.dist));
});

gulp.task('css', function() {
    return gulp.src(PATHS.src.css)
        .pipe(gulp.dest(PATHS.dist + '/styles'));
});

gulp.task('sass', function() {
    return gulp.src(['src/styles/main.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("src/styles"));
});

gulp.task('angular2', function() {

    return gulp
        .src([
            '!node_modules/angular2/node_modules/**',
            '!node_modules/angular2/es6/**',
            '!node_modules/angular2/ts/**',
            '!node_modules/angular2/angular2.api.js',
            '!node_modules/angular2/angular2_sfx.js',
            '!node_modules/angular2/angular2.api.js',
            'node_modules/angular2/**/*.js'
        ])
        .pipe(gulp.dest(PATHS.distLib + '/angular2'));
});

gulp.task('libs', ['angular2'], function() {
    var size = require('gulp-size');
    return gulp.src(PATHS.lib)
        .pipe(size({
            showFiles: true,
            gzip: true
        }))
        .pipe(gulp.dest(PATHS.distLib));
});



gulp.task('connect', function() {
    connect.server({
        root: __dirname + '/dist',
        port: port,
        livereload: false
    });
});

gulp.task('open', function() {
    var options = {
        url: 'http://localhost:' + port,
    };
    gulp.src('./index.html')
        .pipe(open('', options));
});

gulp.task('build', ['js', 'html','css']);
gulp.task('default', ['build', 'libs']);
gulp.task('serve', ['connect', 'open']);
gulp.task('clean', function(done) {
    del(['dist'], done);
});
gulp.task('start', ['default', 'serve']);
gulp.task('restart', ['clean', 'start']);
