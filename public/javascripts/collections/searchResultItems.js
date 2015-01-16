var SearchResultItems = Backbone.Collection.extend({
	model: SearchResultItem,
	localStorage: new Backbone.LocalStorage('booze-backbone'),
	url: '/search',
});

console.log('SearchResultItems');