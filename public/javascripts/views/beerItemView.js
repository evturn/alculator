var BeerItemView = Backbone.View.extend({
	el: '#beverage-items',
	template: _.template($('#beer-item-view-template').html()),
	events: {
		"click input.add-booze": "foo"
	},
	render: function() {
		var beerAttributes = this.model.toJSON();
		this.$el.append(this.template(beerAttributes));
		return this;
	},
	foo: function foo() {
		console.log("whooo");
	}
});

console.log('BeerItemView');
