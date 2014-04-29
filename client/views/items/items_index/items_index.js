/*****************************************************************************/
/* ItemsIndex: Event Handlers and Helpers */
/*****************************************************************************/
Template.ItemsIndex.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.ItemsIndex.helpers({
  total: function () {
    return Items.find().count();
  },
  open_items: function () {
   return Items.find({is_completed: null}).count();
  }

  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* ItemsIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.ItemsIndex.created = function () {
};

Template.ItemsIndex.rendered = function () {
};

Template.ItemsIndex.destroyed = function () {
};
