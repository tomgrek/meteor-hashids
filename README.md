# hashids repackaged for Meteor.js

Forked from timbrandin:meteor-hashids
Changed to get the shortest possible hash (not always 6 chars in length)
Changed to lowercase letters and removed 'bad' letters like i,l,o,u,w.

## How to use?

Meteor Method

Meteor.uuid() to generate a long id # 1a81a6c8-a9d6-46fb-b5d0-c8232438048a

Extend Meteor Method

Meteor.hashid() to generate a short id # w3kt
