/**
 * Created by ben on 8/25/15.
 */
var appRoot = 'client/';
var outRoot = 'www/';

module.exports = {
    root: appRoot,
    source: appRoot + '**/*.js',
    html: appRoot + '**/*.html',
    css: appRoot + '**/*.css',
    sass: appRoot + '**/*.scss',
    jspm: appRoot + 'jspm_packages/**/*',
    config: appRoot + 'config.js',
    test: 'test/**/*.js',
    output: outRoot,
    doc: '/.doc',
    jspmOut: outRoot + 'jspm_packages'
};