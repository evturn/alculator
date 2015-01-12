var Router = Backbone.Router.extend({
	routes: {
		'': 'index',
		'booze/:id': "show"
	},
	initialize: function(options) {
		this.boozeList = options.boozeList;
		this.boozeListView = new BoozeListView({collection: this.boozeList});
		$('#booze').append(this.boozeListView.el);
	},
	start: function() {
		Backbone.history.start({pushState: true});
	},
	index: function() {
		this.boozeList.fetch();
	}
});

console.log('Router');