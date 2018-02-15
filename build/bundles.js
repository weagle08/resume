const paths = require('./paths');
const appBuild = 'app-build';
const vendorBuild = 'vendor-build';

module.exports = {
  bundles: {
    [appBuild]: {
      includes: [
        "[app/**/*.js]",
        "app/**/*.html!text",
        "app/**/*.css!text"
      ],
      options: {
        inject: true,
        minify: true,
        depCache: true,
        rev: false
      }
    },
    [vendorBuild]: {
      includes: [
        "aurelia-framework",
        "aurelia-bootstrapper",
        "aurelia-fetch-client",
        "aurelia-router",
        "aurelia-templating-binding",
        "aurelia-polyfills",
        "aurelia-templating-resources",
        "aurelia-templating-router",
        "aurelia-loader-default",
        "aurelia-history-browser",
        "aurelia-logging-console",
        "moment",
		"whatwg-fetch"
      ],
      options: {
        inject: true,
        minify: true,
        depCache: false,
        rev: false
      }
    }
  }
};
