var StageThree = Backbone.View.extend({
	el: $('#stage'),
	stageThree: _.template($('#stage-three-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.stageThree());
		return this;
	}
});

console.log('StageThree');