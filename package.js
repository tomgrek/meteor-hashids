Package.describe({
  name: 'tomgrek:hashids',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Hashids made simple for Meteor applications',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/tomgrek/meteor-hashids',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "hashids": "1.0.2"
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('underscore');

  api.addFiles('common.js', "server");
});
