var BeerItems = Backbone.Collection.extend({
	model: BeerItem,
	url: '/beers',
});