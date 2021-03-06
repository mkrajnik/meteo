Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() { 
    return [Meteor.subscribe('notifications'),Meteor.subscribe('posts'), Meteor.subscribe('comments')];
  }
  
});

Router.map(function() {

 this.route('glowna', {
    path: '/'
  });
 this.route('postsList', {
    path: '/posts'
  });

  this.route('postPage', {
    path: '/posts/:_id',
    data: function() { return Posts.findOne(this.params._id); }
  });
   this.route('postSubmit', {
    path: '/submit'
  });
this.route('postEdit', {
    path: '/posts/:_id/edit',
    data: function() { return Posts.findOne(this.params._id); }
  });

});
