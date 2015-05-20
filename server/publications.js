Meteor.publish('posts', function(limit) {
  if (limit > Posts.find().count()) {
    limit = 0;
  }

  return Posts.find({ }, { limit: limit });
});
Meteor.publish('comments', function() {
  return Comments.find();
});

Meteor.publish('notifications', function() {
  return Notifications.find();
});
