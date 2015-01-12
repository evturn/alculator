var BeerItemsView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(beerItems, 'add', this.addOne);
  },
  addOne: function(beerModel) {
  var viewOfBeer = new BeerItemView({model: beerModel});
  $('#beer-items').append(viewOfBeer.render().el );
  },

});

console.log('BeerItemsView');

