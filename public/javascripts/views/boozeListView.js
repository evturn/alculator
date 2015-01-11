var BoozeListView = Backbone.View.extend({
	initialize: function() {
		this.collection.on('add', this.addOne, this);
		this.collection.on('reset', this.addAll, this);
	},
	addOne: function(boozeItem) {
		var boozeView = new BoozeView({model: boozeItem});
		this.$el.append(boozeView.render().el);
	},
	addAll: function() {
		this.collection.forEach(this.addOne, this);
		
	},
	render: function() {
		this.addAll();
	}
});

console.log('BoozeListView');