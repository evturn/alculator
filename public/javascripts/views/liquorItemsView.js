var LiquorItemsView = Backbone.View.extend({
	initialize: function() {
		this.listenTo(beerItems, 'add', this.addOne);
    this.listenTo(beerItems, 'reset', this.addAll);
	},
  addOne: function(liquorModel) {
  var view = new LiquorItemView({model: liquorModel});
  $('#beverage-items').append(view.render().el );
  },
  addAll: function() {
    this.$('#beverage-items').html('');
    liquorItems.each(this.addOne, this);
  },
});

console.log('LiquorItemsView');