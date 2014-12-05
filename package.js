Package.describe({
  name: 'hckrs:spin',
  summary: 'Spin.js for Meteor.',
  version: '1.0.0',
  git: 'https://github.com/hckrs/meteor-spin.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  
  api.use([
    'templating',
    'underscore',
    'jquery',
  ], 'client');
  
  api.addFiles([
    'spin.html',
    'spin.js', 
    'spin.css',
    '.npm/package/node_modules/spin/dist/spin.js',
  ], 'client');

  api.export('Spin', 'client');
});

Npm.depends({
  'spin': '0.0.1'
})