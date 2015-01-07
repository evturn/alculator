var DrinkInput = Backbone.View.extend({
	el: $('#hidden-input'),
	template: _.($('#drink-input-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template());
	}
});