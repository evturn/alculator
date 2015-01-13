var SearchResultsView = Backbone.View.extend({
	el: $('#search-results'),
	template: _.template($('#search-results-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.append(this.template(this.model.toJSON()));
		return this;
	}
});

console.log('SearchResultsView');

