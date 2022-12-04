'use strict';

import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import {deleteSync} from 'del';
import gulp from 'gulp';
import concat from 'gulp-concat-util';
import webpack from 'webpack-stream';

import webpackConfig from './webpack.config.js';

// Gulp task to minify CSS files
gulp.task('styles', function () {
    return gulp.src('./src/css/*.css')
        // Minify the file
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
			cascade: false
		}))
        .pipe(csso())
        // Output
        .pipe(gulp.dest('./dist'))
});

// Gulp task to minify JavaScript files
// gulp.task('scripts', function() {
//     return gulp.src('./src/js/**/*.js')
        // .pipe(concat('script.min.js'))
        // .pipe(tap(function(file) {
        //     var content = file.contents.toString();
        //     content = content.replace(/import/g, "//$&");
        //     file.contents = Buffer.from(content);
        // }))
        // .pipe(babel({
        //     presets: ['@babel/preset-env']
        // }))
        // .pipe(uglify())
//         .pipe(gulp.dest('./lib/js'))
// });
  
gulp.task('clean', function(done){
    deleteSync(['dist']);
    deleteSync(['lib/js']);
    done();
})

gulp.task('webpack', () => {
    return gulp.src('src/')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('dist/'));
});

// Gulp task to minify all files
gulp.task('build', gulp.series('clean','styles', 'webpack'));

gulp.task('build:watch', function(done){
    gulp.watch(['./src/**/*.js','./src/**/*.css'], gulp.series('clean','styles', 'webpack'));
    done();
})
   
gulp.task('default', gulp.series('build', 'build:watch'));
// gulp.task('default', gulp.series('build'));