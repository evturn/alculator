var BeerItemsView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'add', this.addAll);
    this.listenTo(this.collection, 'reset', this.addOne);
  },
  // addOne: function(model) {
  //   var view = new BeerItemView({model: model});
  //   view.render();
  // },
  addAll: function() {
    this.collection.forEach(function(model) {
    var modelView = new BeerItemView({model: model});
    modelView.render();
    });
  }
});

console.log('BeerItemsView');

