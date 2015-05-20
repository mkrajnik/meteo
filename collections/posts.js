Posts = new Meteor.Collection('posts');


Posts.allow({ 
	 update: ownsDocument,  
	 remove: ownsDocument
});



Meteor.methods({
  post: function(postAttributes) {
    var user = Meteor.user(),
      postWithSameLink = Posts.findOne({url: postAttributes.url});

    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "Musisz być zalogowany, by dodać post");

    // ensure the post has a title
    if (!postAttributes.title)
      throw new Meteor.Error(422, 'Proszę uzupełnić tytuł.');

    // check that there are no previous posts with the same link
    if (postAttributes.url && postWithSameLink) {
      throw new Meteor.Error(302, 
        'Taki URL już istnieje', 
        postWithSameLink._id);
    }

    // pick out the whitelisted keys
    var post = _.extend(_.pick(postAttributes,'postbody', 'url', 'title', 'message'), {
  userId: user._id, 
  author: user.username, 
  submitted: new Date().getTime(),
  commentsCount: 0
});

var postId = Posts.insert(post);

    return postId;
  }
});
