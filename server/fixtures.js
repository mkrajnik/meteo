if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  // utwórz dwóch użytkowników
  var tomId = Meteor.users.insert({
    profile: { name: 'Tomasz Kowalski' }
  });
  var tom = Meteor.users.findOne(tomId);
  var sachaId = Meteor.users.insert({
    profile: { name: 'Maria Sacha' }
  });
  var sacha = Meteor.users.findOne(sachaId);

  var telescopeId = Posts.insert({
    title: 'Wprowadzenie',
    userId: sacha._id,
    author: sacha.profile.name,
    postbody: 'Hej, a wiecie, że można dodawac posty po zalogowaniu?',
    url: 'http://sachagreif.com/introducing-telescope/',
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 2
  });

  Comments.insert({
    postId: telescopeId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'Wow, niesamowite'
  });

  Comments.insert({
    postId: telescopeId,
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: now - 3 * 3600 * 1000,
    body: 'Dzieki'
  });

  Posts.insert({
    title: 'Meteor',
    userId: tom._id,
    author: tom.profile.name,
    postbody: 'Kolejny post',
    url: 'http://meteor.com',
    submitted: now - 10 * 3600 * 1000,
    commentsCount: 0
  });

  Posts.insert({
    title: 'Post 3',
    userId: tom._id,
    author: tom.profile.name,
    postbody: 'Tam tam tam tam',
    url: 'http://themeteorbook.com',
    submitted: now - 12 * 3600 * 1000,
    commentsCount: 0
  });
}
