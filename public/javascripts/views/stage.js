var StageView = Backbone.View.extend({
	el: $('#stage'),
	// stageZero: _.template($('#stage-zero-template').htm;()),
	stageOne: _.template($('#stage-one-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.stageOne(this.model.toJSON()));
		return this;
	}
});

console.log('StageView');