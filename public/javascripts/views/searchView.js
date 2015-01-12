var SearchView = Backbone.View.extend({
	el: $('#search-container'),
	initialize: function() {
		this.render();
	},
	template: _.template($("#beer-search-template").html()),
	render: function() {
		this.$el.html(this.template());
    return this;
	}
});

console.log('SearchView');