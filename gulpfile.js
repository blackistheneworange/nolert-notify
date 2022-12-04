'use strict';

import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import {deleteSync} from 'del';
import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import runSequence from 'run-sequence';
import sass from 'gulp-sass';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import tap from 'gulp-tap';
import concat from 'gulp-concat-util';

// Gulp task to minify CSS files
gulp.task('styles', function () {
    return gulp.src('./src/css/*.css')
        // Minify the file
        .pipe(concat('style.min.css'))
        .pipe(csso())
        // Output
        .pipe(gulp.dest('./dist'))
});

// Gulp task to minify JavaScript files
gulp.task('scripts', function() {
    return gulp.src('./src/js/**/*.js')
        .pipe(concat('script.min.js'))
        .pipe(tap(function(file) {
            var content = file.contents.toString();
            content = content.replace(/import/g, "//$&");
            file.contents = Buffer.from(content);
        }))
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
});
  
gulp.task('clean', function(done){
    deleteSync(['dist']);
    done();
})

// Gulp task to minify all files
gulp.task('default', gulp.series('clean','styles','scripts'));