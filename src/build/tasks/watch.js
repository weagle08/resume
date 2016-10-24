/**
 * Created by weagle08 on 3/5/2016.
 */
'use strict';
var gulp = require('gulp');
var paths = new (require('../paths'))();
var browserSync = require('browser-sync');

// outputs changes to files to the console
function reportChange(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// this task will watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
gulp.task('watch', ['serve'], function() {
    gulp.watch(paths.input.js, ['build-client-js', browserSync.reload]).on('change', reportChange);
    gulp.watch(paths.input.html, ['build-html', browserSync.reload]).on('change', reportChange);
    gulp.watch(paths.input.sass, ['build-sass', browserSync.reload]).on('change', reportChange);
    gulp.watch(paths.input.moveOnly, ['move', browserSync.reload]).on('change', reportChange)
    //gulp.watch(paths.input.node, ['test']).on('change', reportChange);
});

gulp.task('watch-proxy', ['serve-proxy'], function() {
    gulp.watch(paths.input.js, ['build-client-js', browserSync.reload]).on('change', reportChange);
    gulp.watch(paths.input.html, ['build-html', browserSync.reload]).on('change', reportChange);
    gulp.watch(paths.input.sass, ['build-sass', browserSync.reload]).on('change', reportChange);
    gulp.watch(paths.input.moveOnly, ['move', browserSync.reload]).on('change', reportChange);
    //gulp.watch(paths.input.node, ['test']).on('change', reportChange);
});

gulp.task('watch-build-only', ['build'], function() {
    gulp.watch(paths.input.js, ['build-client-js', browserSync.reload]).on('change', reportChange);
    gulp.watch(paths.input.html, ['build-html', browserSync.reload]).on('change', reportChange);
    gulp.watch(paths.input.sass, ['build-sass', browserSync.reload]).on('change', reportChange);
    gulp.watch(paths.input.moveOnly, ['move', browserSync.reload]).on('change', reportChange)
});