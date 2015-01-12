var BoozeItemsView = Backbone.View.extend({
	initialize: function() {
		this.collection.on('add', this.addOne, this);
		this.collection.on('reset', this.addAll, this);
	},
	addOne: function(boozeItem) {
		var boozeItemView = new BoozeItemView({model: boozeItem});
		this.$el.append(boozeItemView.render.el);
	},
	addAll: function() {
		this.collection.forEach(this.addOne, this);
		
	},
	render: function() {
		this.addAll();
	}
});

console.log('BoozeItemsView');