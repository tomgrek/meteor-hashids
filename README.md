# hashids repackaged for Meteor.js

```
meteor add tomgrek:hashids
```

Forked from timbrandin:meteor-hashids

Changed to get the shortest possible hash (not always 6 chars in length)

Changed to lowercase letters and removed 'bad' letters like i,l,o,u,w.

## Examples

```
Meteor.hashid(123)
Meteor.hashid(Date.now())
```
