var SearchResultItems = Backbone.Collection.extend({
	model: SearchResultItem,
	url: '/search'
});