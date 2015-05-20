Comments = new Meteor.Collection('comments');


Meteor.methods({
  comment: function(commentAttributes) {
    var user = Meteor.user();
    var post = Posts.findOne(commentAttributes.postId);
    // ensure the user is logged in    
if (!user)
      throw new Meteor.Error(401, "Musisz się zalogować aby dodawać komentarze");
    if (!commentAttributes.body)
      throw new Meteor.Error(422, 'Proszę wpisać treść komentarza. ');
    if (!post)
      throw new Meteor.Error(422, 'Musisz komentować określony post');
    comment = _.extend(_.pick(commentAttributes, 'postId', 'body'), {
      userId: user._id,
      author: user.username,
      submitted: new Date().getTime()
    });
 Posts.update(comment.postId, {$inc: {commentsCount: 1}});

return Comments.insert(comment);
  }
});
