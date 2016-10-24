/**
 * Created by ben on 7/7/16.
 */
const path = require('path');
const paths = new (require('./paths'))();

module.exports.base = () => {
    return {
        filename: '',
        filenameRelative: '',
        sourceMap: true,
        sourceRoot: '',
        moduleRoot: path.resolve('./').replace(/\\/g, '/'),
        moduleIds: false,
        comments: false,
        compact: false,
        code: true,
        presets: [],
        plugins: [
            'syntax-flow',
            'transform-decorators-legacy',
            'transform-flow-strip-types'
        ]
    };
};

module.exports.systemjs = () => {
    let options = module.exports.base();
    options.moduleRoot += 'client';
    options.presets.push('es2015-loose', 'stage-1');
    options.plugins.push('transform-es2015-modules-systemjs');
    return options;
};