var Stages = Backbone.Collection.extend({
	model: Stage,
	url: '/stages',
	localStorage: new Backbone.LocalStorage('booze-backbone'),
});

console.log('StageCollecton');