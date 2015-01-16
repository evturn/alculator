var SearchResultItemsView = Backbone.View.extend({
	el: '#search-results',
	initialize: function() {
		this.listenTo(this.collection, 'reset', this.addOne);
	},
	addOne: function(model) {
		var view = new SearchResultItem({model: model});
		this.$el.append(view.render().el);
	},
});

console.log('SearchResultItemViews');