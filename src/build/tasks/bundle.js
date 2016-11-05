/**
 * Created by ben on 8/23/16.
 */
const gulp = require('gulp');
const bundle = require('aurelia-bundler').bundle;

let config = {
    force: true,
    packagePath: '.',
    baseURL: './www',                   // baseURL of the application
    configPath: './www/config.js',      // config.js file. Must be within `baseURL`
    bundles: {
        "dist/app-build": {           // bundle name/path. Must be within `baseURL`. Final path is: `baseURL/dist/app-build.js`.
            includes: [
                '[*.js]',
                '[components/**/*.js]',
                '[pages/**/*.js]',
                '[**/*.html!text]',
                '[**/*.css!text]'
            ],
            excludes: [
                'config',
                '[libs/**/*]',
                '[libs/**/*.css!text]'
            ],
            options: {
                inject: true,
                minify: true
            }
        },
        "dist/vendor-build": {
            includes: [
                "aurelia-bootstrapper",
                "aurelia-event-aggregator",
                "aurelia-fetch-client",
                "aurelia-framework",
                "aurelia-logging",
                "aurelia-polyfills",
                "aurelia-router",
                "css",
                "moment",
                "aurelia-templating-resources",
                "aurelia-logging-console",
                "aurelia-templating-binding",
                "aurelia-loader-default",
                "aurelia-history-browser",
                "aurelia-templating-router"
            ],
            options: {
                inject: true,
                minify: true
            }
        }
    }
};

gulp.task('bundle', ['build'], function() {
    return bundle(config);
});