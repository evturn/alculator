var StageView = Backbone.View.extend({
	el: $('#stage'),
	stageZero: _.template($('#stage--zero-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	}
});

console.log('StageView');