var BoozeList = Backbone.Collection.extend({
	model: BoozeItem,
	url: '/booze',
	initialize: function() {
		this.on('remove', this.hideModel);
	},
	hideModel: function(model) {
		model.trigger('hide');
	},
	completed: function() {
  	return this.filter(function(boozeItem) {
    	return boozeItem.get('completed');
  	});
  },
	remaining: function() {
  	return this.without.apply(this, this.completed() );
  },
});

console.log('BoozeList');