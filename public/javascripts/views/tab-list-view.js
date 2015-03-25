var TabListView = Backbone.View.extend({
	el: '#booze-items',
  initialize: function() {
    this.listenTo(boozeItems, 'add', this.addOne);
  },
  addOne: function(model) {
    var viewOfBooze = new TabItemView({model: model});
    this.$el.append(viewOfBooze.render().el );
  },
});

