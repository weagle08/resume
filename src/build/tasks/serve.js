/**
 * Created by weagle08 on 3/5/2016.
 */
'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync');

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve', ['build'], function(done) {
    browserSync({
        online: false,
        open: false,
        port: 8080,
        server: {
            baseDir: ['./www'],
            middleware: function(req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                next();
            }
        }
    }, done);
});

gulp.task('serve-only', [], function(done) {
    browserSync({
        online: false,
        open: false,
        port: 8080,
        server: {
            baseDir: ['./www'],
            middleware: function(req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                next();
            }
        }
    }, done);
});

gulp.task('serve-proxy', ['build'], function(done) {
    browserSync({
        online: false,
        open: false,
        port: 80,
        proxy: 'localhost:443'
    }, done);
});