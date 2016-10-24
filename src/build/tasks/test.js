/**
 * Created by ben on 7/7/16.
 */
'use strict';
let gulp = require('gulp');
let mocha = require('gulp-spawn-mocha');
let paths = new (require('../paths'))();

gulp.task('test', () => {
    return gulp.src(paths.input.test, {read: false})
        .pipe(mocha());
});