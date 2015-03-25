var TabListView = Backbone.View.extend({
	el: '#tab-list',
  initialize: function() {
    this.listenTo(this.collection, 'add', this.addOne);
  },
  addOne: function(model) {
    var view = new TabItemView({model: model});
    this.$el.append(view.render().el );
  },
});