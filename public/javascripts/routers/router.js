var Router = Backbone.Router.extend({
	routes: {
		'': 'index',
		'booze/:id': "show"
	},
	initialize: function(options) {
		this.boozeItems = options.boozeItems;
		this.boozeItemsView = new BoozeItemsView({collection: this.boozeItems});
		$('#booze').append(this.boozeItemsView.el);
	},
	start: function() {
		Backbone.history.start({pushState: true});
	},
	index: function() {
		this.boozeItems.fetch();
	}
});

console.log('Router');