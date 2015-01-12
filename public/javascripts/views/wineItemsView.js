var WineItemsView = Backbone.View.extend({
	initialize: function() {
		this.listenTo(wineItems, 'add', this.addOne);
    this.listenTo(wineItems, 'reset', this.addAll);
	},
  addOne: function(wineModel) {
  var viewOfWine = new LiquorItemView({model: wineModel});
  $('#beverage-items').append(viewOfWine.render().el );
  },
  addAll: function() {
    this.$('#beverage-items').html('');
    wineItems.each(this.addOne, this);
  },
});

console.log('WineItemsView');