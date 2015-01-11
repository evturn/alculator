var Router = Backbone.Router.extend({
	routes: {
		'booze/:id': "show"
	},
	show: function(id) {
		this.boozeList.focusOnBoozeItem(id);
	},
	initialize: function(options) {
		this.boozeList = options.boozeList;
	}
});