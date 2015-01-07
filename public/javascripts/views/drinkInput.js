var DrinkInput = Backbone.View.extend({
	el: $('#drink-input'),
	initialize: function() {
		this.render();
	},
	template: _.template($('#drink-input-template').html()),
	render: function() {
		this.$el.html(this.template());
	}
});

console.log('drinkInput');