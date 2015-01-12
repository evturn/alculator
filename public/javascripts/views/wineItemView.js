var WineItemView = Backbone.View.extend({
	el: '#beverage-items',
	template: _.template($('#wine-item-view-template').html()),
	render: function() {
		var wineAttributes = this.model.toJSON();
		this.$el.append(this.template(wineAttributes));
		return this;
	}
});

console.log('WineItemView');