ItemsIndexController = RouteController.extend({
  waitOn: function () {
    Meteor.subscribe('items_index');
  },

  data: function () {
    return {
      items: Items.find({}, {sort: {is_completed: 1, createdAt: -1}}) 
    };
  },

  action: function () {
    this.render();
  }
});
