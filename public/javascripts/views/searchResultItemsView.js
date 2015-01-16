var SearchResultItemsView = Backbone.View.extend({
	el: '#search-results',
	initialize: function() {
		this.listenTo(this.collection, 'add', this.addOne);
	},
	addOne: function(model) {
		var view = new SearchResultItem({model: model});
		this.$el.append(view.el);
	},
});

console.log('SearchResultItemViews');