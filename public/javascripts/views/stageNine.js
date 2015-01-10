var StageNine = Backbone.View.extend({
	el: $('#stage'),
	stageNine: _.template($('#stage-nine-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.stageNine());
		return this;
	}
});

console.log('StageNine');