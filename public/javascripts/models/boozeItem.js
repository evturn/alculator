var BoozeItem = Backbone.Model.extend({
	urlRoot: '/booze',
	defaults: {
		name: 'No name',
		abv: 'none',
		img: 'images/alc.png',
		status: 'incomplete'
	},
	localStorage: new Backbone.LocalStorage('booze-rounds'),
	toggleStatus: function() {
				if (this.get('status') === 'incomplete') {
			this.set({'status': 'complete'});
		} else {
			this.set({'status': 'incomplete'});
		}
		this.save();
	},
});

console.log('BoozeItem');