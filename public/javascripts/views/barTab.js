var BarTabView = Backbone.View.extend({
	el: $('#search-results'),
	template: _.template($('#beerTabTemplate').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	}
});

console.log('BeerTabView');