var root = 'client/';
var appRoot = 'client/app/';
var outputRoot = 'www/';
var exportSrvRoot = 'export/';

module.exports = {
  root: root,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  css: appRoot + '**/*.css',
  sass: appRoot + '**/*.scss',
  move: [root + '**/*', '!' + appRoot + '**/*'],
  output: outputRoot,
  appOutput: outputRoot + 'app/',
  exportSrv: exportSrvRoot,
  doc: './doc'
};
