/*****************************************************************************/
/* CreateItem: Event Handlers and Helpers */
/*****************************************************************************/
Template.CreateItem.events({
  'submit form': function(e) {
    e.preventDefault();

    var item = {
      name: $('#item_name').val(),
      creatorId: Meteor.userId(),
      createdAt: Date.now()
    }
      
    Items.insert(item); 
  }
});

Template.CreateItem.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* CreateItem: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateItem.created = function () {
};

Template.CreateItem.rendered = function () {
};

Template.CreateItem.destroyed = function () {
};


Template.Item.helpers({
  created: function () {
    return moment(this.createdAt).fromNow();
  },
  username: function () {
    var a_user = Meteor.users.findOne({_id:this.creatorId});
    return this.creatorId;
  }
});

Template.Item.events({
  'click input[type="checkbox"]': function () {
    Items.update({_id: this._id}, {
      $set: {is_completed: true}
    });
  }
});
