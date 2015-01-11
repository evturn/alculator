var BeerList = Backbone.Collection.extend({
	model: BeerItem,
	url: '/beers'
});

console.log('BeerList');