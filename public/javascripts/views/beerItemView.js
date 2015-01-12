var BeerItemView = Backbone.View.extend({
	el: '#beverage-items',
	template: _.template($('#beer-item-view-template').html()),
	events: {

	},
	render: function() {
		var beerAttributes = this.model.toJSON();
		this.$el.append(this.template(beerAttributes));
		return this;
	},
});

console.log('BeerItemView');
