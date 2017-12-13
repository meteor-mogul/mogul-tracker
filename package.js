Package.describe({
  // What this package does
  summary: "Dependency tracker to allow reactive callbacks using Vue",
  version: '0.0.1',
  // Optional, default is package directory name
  name: 'meteormogul:mogul-tracker',
  // Optional GitHub URL to your source repository
  git: 'https://github.com/meteor-mogul/mogul-tracker.git'
});

Package.onUse(function (api) {
  api.use('ecmascript@0.9.0');
  api.export('Tracker');
  api.export('Deps');
  api.addFiles('tracker.js');
  api.addFiles('deprecated.js');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('test-helpers');
  api.use('tracker');
  api.addFiles('tracker_tests.js', 'client');
});
