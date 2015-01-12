var LiquorItemView = Backbone.View.extend({
		el: '#beverage-items',
	template: _.template($('#liquor-item-view-template').html()),
	render: function() {
		var liquorAttributes = this.model.toJSON();
		this.$el.append(this.template(liquorAttributes));
		return this;
	}
});

console.log('LiquorViewItem');