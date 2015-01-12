var BeerItemView = Backbone.View.extend({
	el: '#beer-items',
	template: _.template($('#beer-item-view-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		var beerAttributes = this.model.toJSON();
		this.$el.append(this.template(beerAttributes));
		return this;
	}
});

console.log('BeerItemView');


var beerItem = new BeerItem();
// var beerItemView = new BeerItemView({model: beerItem})