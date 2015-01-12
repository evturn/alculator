var LiquorItems = Backbone.Collection.extend({
	model: BeerItem,
	url: '/beers'
});

console.log('LiquorItems');

var liquorItems = new LiquorItems();
liquorItems.fetch();