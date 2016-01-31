Hashids = Npm.require('hashids');

_.extend(Meteor, {
  hashid: function() {
    var hash, uuid;
    uuid = new Hashids(Meteor.uuid(), 0, 'abcdefghjkmnpqrstxy1234567890');
    return hash = uuid.encode(Date.now());
  },
  hashid: function(param) {
    var hash, uuid;
    uuid = new Hashids(Meteor.uuid(), 0, 'abcdefghjkmnpqrstxy1234567890');
    return hash = uuid.encode(param);
  }
});
