var BoozeItem = Backbone.Model.extend({
	urlRoot: '/booze',
	defaults: {
		name: 'No name',
		abv: 'none',
		img: 'images/alc.png',
		completed: false
	},
	localStorage: new Backbone.LocalStorage('booze-rounds'),

});

console.log('BoozeItem');