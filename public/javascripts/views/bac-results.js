var BacResults = Backbone.View.extend({
	el: '#results',
	resultsTemplate: _.template($('#results-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.resultsTemplate(this.model.toJSON()));
		return this;
	},
});