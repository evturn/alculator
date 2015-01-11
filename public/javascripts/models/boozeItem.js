var BoozeItem = Backbone.Model.extend({
	urlRoot: '/booze',
	defaults: {
		name: 'No name',
		abv: 'none',
		img: 'images/alc.png',
		status: 'incomplete'
	}
});

console.log('BoozeItem');