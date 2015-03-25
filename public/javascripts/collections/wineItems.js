var Wine = Backbone.Collection.extend({
	model: Beverage,
	url: '/wine'
});

var wine = new Wine();
wine.fetch();