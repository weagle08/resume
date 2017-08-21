var root = 'client/';
var appRoot = 'client/';
var outputRoot = 'www/';
var exportSrvRoot = 'export/';

module.exports = {
  root: root,
  source: [appRoot + '**/*.js', '!' + appRoot + '/jspm_packages/**/*'],
  html: [appRoot + '**/*.html', '!' + appRoot + 'jspm_packages/**/*'],
  css: [appRoot + '**/*.css', '!' + appRoot + 'jspm_packages/**/*'],
  sass: [appRoot + '**/*.scss', '!' + appRoot + 'jspm_packages/**/*'],
  move: [root + 'libs/**/*', root + 'jspm_packages/**/*'],
  output: outputRoot,
  appOutput: outputRoot + '',
  exportSrv: exportSrvRoot,
  doc: './doc'
};