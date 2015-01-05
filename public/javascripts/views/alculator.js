var AlculatorView = Backbone.View.extend({
	el: $('#alculator'),
	initialize: function() {
		this.render();
	},
	template: _.template($('#alculatorTemplate').html()),
	render: function() {
		this.$el.html(this.template());
	}
});