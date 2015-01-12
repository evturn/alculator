var BoozeItemsView = Backbone.View.extend({
	initialize: function() {
		this.listenTo(boozeItems, 'add', this.addOne);
    this.listenTo(boozeItems, 'reset', this.addAll);
	},
  addOne: function(boozeModel) {
  var viewOfBooze = new BoozeItemView({model: boozeModel});
  $('#booze-items').append(viewOfBooze.render().el );
  },
  addAll: function() {
    this.$('#booze-items').html('');
    boozeItems.each(this.addOne, this);
  },
});

console.log('BoozeItemsView');