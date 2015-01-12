var WineItems = Backbone.Collection.extend({
	model: WineItem,
	url: '/wine'
});

console.log('WineItems');

var wineItems = new WineItems();
wineItems.fetch();