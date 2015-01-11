var BoozeListView = new Backbone.View.extend({
	initialize: function() {
		this.collection.on('add', this.addOne, this);
	},
	addOne: function(boozeItem) {
			var boozeView = new BoozeView({model: boozeItem});
			this.$el.append(boozeView.render().el);
	},
	render: function() {
		this.collection.forEach(this.addOne, this);
	}
});

console.log('BoozeListView');