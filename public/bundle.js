"use strict";
var gulp = require("gulp");
var sass = require("gulp-sass");
var watch = require("gulp-watch");
var concat = require("gulp-concat");
var to5 = require("gulp-6to5");

var paths = {
    sassSource: ["./public/styles/**/*.sass"],
    jsSource: ["./public/**/*.js", "!./public/bundle.js"]
};

gulp.task("sass", function () {
    return gulp.src(paths.sassSource).pipe(sass()).pipe(concat("style.css")).pipe(gulp.dest("./public/newStyles"));
});
gulp.task("js", function () {
    return gulp.src(paths.jsSource).pipe(concat("bundle.js")).pipe(to5()).pipe(gulp.dest("./public"));
});

gulp.task("watch", function () {
    gulp.watch(paths.sassSource, ["sass"]);
    gulp.watch(paths.jsSource, ["js"]);
});

gulp.task("default", ["sass", "watch", "js"]);