var BeerView = Backbone.View.extend({
	el: $('#search-container'),
	initialize: function() {
		this.render();
	},
	template: _.template($("#beerSearchTemplate").html()),
	render: function() {
		this.$el.html(this.template());
    return this;
	}
});

console.log('BeerView');