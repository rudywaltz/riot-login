var gulp = require('gulp'),
    webpack = require('gulp-webpack'),
    watch = require('gulp-watch'),
    webpackConfig = require("./webpack.config.js");

gulp.task("webpack", function() {
    return gulp.src('src/entry.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function() {
    gulp.watch('./src/**/*.*', ['webpack']);
});
