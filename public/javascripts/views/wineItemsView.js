var WineItemsView = Backbone.View.extend({
  el: '#beverage-items',
  initialize: function() {
    this.listenTo(this.collection, 'reset', this.addAll);
  },
  addOne: function(model) {
    var view = new WineItemView({model: model});
    this.$el.append(view.el);
  },
  addAll: function() {
    this.$el.empty();
    this.collection.each(function(model) {
      this.addOne(model);
    }.bind(this));
  }
});

