var WineItems = Backbone.Collection.extend({
	model: WineItem,
	url: '/wine'
});

var wineItems = new WineItems();
wineItems.fetch();