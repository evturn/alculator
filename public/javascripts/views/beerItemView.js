var BeerItemView = Backbone.View.extend({
	el: '#booze-content',
	template: _.template($('#beer-item-view-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		var beerAttributes = this.model.toJSON();
		this.$el.html(this.template(beerAttributes));
		return this;
	}
});

console.log('BeerItemView');