var LiquorItemsView = Backbone.View.extend({
	el: '#beverage-items',
  initialize: function() {
    this.listenTo(this.collection, 'reset', this.addAll);
  },
  addOne: function(model) {
    var view = new LiquorItemView({model: model});
    this.$el.append(view.el);
  },
  addAll: function() {
    this.collection.each(function(model) {
      this.addOne(model);
    }.bind(this));
  }
});

console.log('LiquorItemsView');