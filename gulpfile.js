'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const concat = require('gulp-concat');
const to5 = require('gulp-6to5');

const paths = {
    sassSource: ['./public/styles/**.scss'],
    jsSource: ['**.js']
};

gulp.task('sass', function() {
    return gulp.src(paths.sassSource)
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('.public/newStyles'));
});
gulp.task('js', function() {
 return gulp.src(paths.jsSource)
 .pipe(concat('bundle.js'))
 .pipe(to5())
 .pipe(gulp.dest('./public'));
});

gulp.task('watch', function() {
    gulp.watch(paths.sassSource, ['sass']);
    gulp.watch(paths.jsSource, ['js']);
})

gulp.task('default', ['sass', 'watch', 'js'])
