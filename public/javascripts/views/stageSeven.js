var StageSeven = Backbone.View.extend({
	el: $('#stage'),
	stageSeven: _.template($('#stage-seven-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.stageSeven());
		return this;
	}
});

console.log('StageSeven');