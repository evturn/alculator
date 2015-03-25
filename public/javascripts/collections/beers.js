var Beers = Backbone.Collection.extend({
	model: Beverage,
	url: '/beers',
});