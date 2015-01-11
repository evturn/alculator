var BoozeList = Backbone.Collection.extend({
	model: BoozeItem,
	url: '/booze',
	initialize: function() {
		this.on('remove', this.hideModel);
	},
	hideModel: function(model) {
		model.trigger('hide');
	}
});

console.log('BoozeList');