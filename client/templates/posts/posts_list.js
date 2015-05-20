Template.postsList.helpers({
  posts: function() {
     return Posts.find({}, {sort: {submitted: -1}});
  },
});

Template.registerHelper("prettifyDate", function(submitted) {
    return new Date(submitted).toString('yyyy-MM-dd')
});
