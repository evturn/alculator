var BeerList = Backbone.Collection.extend({
	model: BeerItem,
	url: '/beers',
	initialize: function(options) {
		this.beerList = options.beerList;
		this.boozeListView = new BeerListView({collection: this.beerList});
		$('#booze-content').append(this.beerListView.el);
	}
});

console.log('BeerList');

