var StageTwo = Backbone.View.extend({
	el: $('#stage'),
	stageTwo: _.template($('#stage-two-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.stageTwo());
		return this;
	}
});

console.log('StageTwo');