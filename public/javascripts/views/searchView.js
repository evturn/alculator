var SearchView = Backbone.View.extend({
	el: $('#search-container'),
	template: _.template($("#beer-search-template").html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click .beer-item': 'logSelection'
	},
	render: function() {
		this.$el.html(this.template());
    return this;
	},
	logSelection: function(e) {
		e.preventDefault();
		console.log('boozeItems', boozeItems);
	}
});

console.log('SearchView');