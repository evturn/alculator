var LiquorItems = Backbone.Collection.extend({
	model: LiquorItem,
	url: '/liquor'
});

console.log('LiquorItems');

var liquorItems = new LiquorItems();
liquorItems.fetch();