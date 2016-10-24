/**
 * Created by ben on 7/7/16.
 */
'use strict';
let srcRoot = './';
let outRoot = './';

module.exports = class Paths {
    constructor(){
        let clientRoot = srcRoot + 'client/';
        let jspm = clientRoot + 'jspm_packages/**/*';
        let libs = clientRoot + 'libs/**/*';
        let jspmConfig = clientRoot + 'config.js';
        let images = clientRoot + 'images/**/*';
        let img = clientRoot + '**/*.png';
        let json = clientRoot + '**/*.json';
        let test = srcRoot + 'test/*.test.js';

        let noBuild = ['!' + jspm, '!' + libs, '!' + jspmConfig, '!./client/js/**/*'];
        let moveOnly = [jspm, libs, jspmConfig, images, json, img, './client/js/**/*'];

        this.input = {
            moveOnly: moveOnly,
            js: noBuild.concat([clientRoot + '**/*.js']),
            html: noBuild.concat([clientRoot + '**/*.html']),
            sass: noBuild.concat([clientRoot + '**/*.scss']),
            json: json,
            node: [srcRoot + '**/*.js', '!' + 'client/', '!' + 'www/', '!' + 'node_modules/'],
            test: test
        };

        this.output = {
            client: 'www'
        }
    }
};