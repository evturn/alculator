var BoozeItem = Backbone.Model.extend({
	urlRoot: '/booze',
	defaults: {
		name: 'No name',
		abv: 'none',
		ounces: '',
		img: 'images/alc.png',
		completed: false
	}
});

console.log('BoozeItem');