var StageZero = Backbone.View.extend({
	el: $('#stage'),
	stageOne: _.template($('#stage-one-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.stageOne());
		return this;
	}
});

console.log('StageOne');