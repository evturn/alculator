var LiquorItemsView = Backbone.View.extend({
	initialize: function() {
		this.listenTo(liquorItems, 'add', this.addOne);
    this.listenTo(liquorItems, 'reset', this.addAll);
	},
  addOne: function(liquorModel) {
  var viewOfLiquor = new LiquorItemView({model: liquorModel});
  $('#beverage-items').append(viewOfLiquor.render().el );
  },
  addAll: function() {
    this.$('#beverage-items').html('');
    liquorItems.each(this.addOne, this);
  },
});

console.log('LiquorItemsView');