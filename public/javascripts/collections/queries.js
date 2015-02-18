var Queries = Backbone.Collection.extend({
	model: Query,
	url: '/search'
});