var Outcome = Backbone.Model.extend({
	defaults: {
		bac: '',
		description: '',
		color: ''
	},
	url: '/outcomes',
});

