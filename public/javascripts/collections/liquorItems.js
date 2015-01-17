var LiquorItems = Backbone.Collection.extend({
	model: LiquorItem,
	url: '/liquor'
});

var liquorItems = new LiquorItems();
liquorItems.fetch();