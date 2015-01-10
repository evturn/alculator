var StageEight = Backbone.View.extend({
	el: $('#stage'),
	stageEight: _.template($('#stage-eight-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.stageEight());
		return this;
	}
});

console.log('StageEight');