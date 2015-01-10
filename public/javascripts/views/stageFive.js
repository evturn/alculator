var StageFive = Backbone.View.extend({
	el: $('#stage'),
	stageFive: _.template($('#stage-five-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.stageFive());
		return this;
	}
});

console.log('StageFive');