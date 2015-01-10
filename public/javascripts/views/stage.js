var StageZero = Backbone.View.extend({
	el: $('#stage'),
	stageZero: _.template($('#stage-zero-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.stageZero());
		return this;
	}
});

console.log('StageZero');