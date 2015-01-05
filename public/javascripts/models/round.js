var Round = Backbone.Model.extend({
	defaults: {
		sex: '',
		hours: '',
		lbs: '',
		drinks: '',
		abv: '',
		bac: '',
		rate: ''
	},
	url: '/api/rounds',
});

console.log('Round');