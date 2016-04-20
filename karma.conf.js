var path = require("path");
var WebpackConfig = require('webpack-config');

module.exports = function(config) {
    config.set({
        logLevel: config.LOG_DEBUG,
        port: 3334,
        browsers: ['PhantomJS'],
        singleRun: true,
        frameworks: ['jasmine-ajax', 'jasmine'],
        files: [
            path.join(__dirname, 'node_modules', 'phantomjs-polyfill', 'bind-polyfill.js'),
            path.join(__dirname, 'node_modules', 'es6-promise', 'dist', 'es6-promise.min.js'),
            path.join(__dirname, 'node_modules', 'jasmine-ajax', 'lib', 'mock-ajax.js'),
            'karma.tests.js'
        ],
        preprocessors: {
            'karma.tests.js': ['webpack', 'sourcemap']
        },
        reporters: ['spec'],
        webpack: new WebpackConfig().extend({
            "webpack.config": function(config) {
                config.plugins = config.plugins.slice(1);
                return config;
            }
        })
    });
};
