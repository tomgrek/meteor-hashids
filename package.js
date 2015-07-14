Package.describe({
  name: 'timbrandin:hashids',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A small JavaScript class to generate YouTube-like hashes from one or many numbers. This is a client-side version of Node.js hashids',
  // URL to the Git repository containing the source code for this package.
  git: '',
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
