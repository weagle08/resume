/**
 * Created by ben on 7/7/16.
 */
'use strict';
const gulp = require('gulp');
const runSequence = require('run-sequence');
const changed = require('gulp-changed');
const plumber = require('gulp-plumber');
const builder = require('gulp-babel');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const compileOptions = require('../babel-options');
const assign = Object.assign || require('object.assign');
const notify = require('gulp-notify');
const browserSync = require('browser-sync');
const paths = new (require('../paths'))();
const gulpif = require('gulp-if');
const argv = require('yargs').argv;

gulp.task('build-client-js', () => {
        return gulp.src(paths.input.js)
            .pipe(plumber({errorHandler: notify.onError('Error: <% error.message %>')}))
            .pipe(changed(paths.output.client, {extension: '.js'}))
            .pipe(gulpif(!argv.production, sourcemaps.init({loadMaps: true})))
            .pipe(builder(assign({}, compileOptions.systemjs())))
            .pipe(gulpif(!argv.production, sourcemaps.write({includeContent: true})))
            .pipe(gulp.dest(paths.output.client));
});

gulp.task('build-html', () => {
    return gulp.src(paths.input.html)
        .pipe(changed(paths.output.client, {extension: '.html'}))
        .pipe(gulp.dest(paths.output.client));
});

gulp.task('build-sass', function(){
    return gulp.src(paths.input.sass)
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(changed(paths.output.client, {extension: '.css'}))
        .pipe(sass())
        .pipe(gulp.dest(paths.output.client))
});

gulp.task('move', function(){
    return gulp.src(paths.input.moveOnly, {base: 'client'})
        .pipe(changed(paths.output.client))
        .pipe(gulp.dest(paths.output.client));
});

gulp.task('build', (callback) => {
    return runSequence(
        'clean',
        ['build-client-js', 'build-html', 'build-sass', 'move'],
        callback
    );
});