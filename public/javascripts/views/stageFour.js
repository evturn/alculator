var StageFour = Backbone.View.extend({
	el: $('#stage'),
	stageFour: _.template($('#stage-four-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.stageFour());
		return this;
	}
});

console.log('StageFour');