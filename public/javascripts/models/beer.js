var Beer = Backbone.Model.extend({
	url: '/beers',
	render: function() {
		var beerModel = this.model.toJSON();
		var barTabView = new BarTabView({model: beerModel});
	}
});