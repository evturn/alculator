var Wine = Backbone.Collection.extend({
	model: Beverage,
	url: '/wine'
});