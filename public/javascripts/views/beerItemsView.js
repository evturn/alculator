var BeerItemsView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'add', this.addOne);
  },
  addOne: function(model) {
    var view = new BeerItemView({model: model});
    view.render()
  },
  addAll: function() {
    this.collection.each(function(model) {
    var modelView = new BeerItemView({model: model});
    modelView.render();
    });
  }
});

console.log('BeerItemsView');

