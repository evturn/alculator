var BoozeListView = new Backbone.View.extend({
	render: function() {
		this.collection.forEach(function(boozeItem) {
			var boozeView = new BoozeView({model: boozeItem});
			this.$el.append(boozeView.render().el);
		});
	}
});

console.log('BoozeListView');