Hashids = Npm.require('hashids');

_.extend(Meteor, {
  hashid: function() {
    var hash, uuid;
    uuid = new Hashids(Meteor.uuid(), 6, 'ABCDEFGHIJKLMNOPQRSTUVXYZ123456789');
    return hash = uuid.encode(Date.now());
  }
});
