/**
 * Created by ben on 7/7/16.
 */
'use strict';
const gulp = require('gulp');
const paths = new (require('../paths'))();
const del = require('del');
const vinylPaths = require('vinyl-paths');

gulp.task('clean', [], () => {
    return gulp.src([paths.output.client])
        .pipe(vinylPaths(del));
});