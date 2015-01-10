var StageSix = Backbone.View.extend({
	el: $('#stage'),
	stageSix: _.template($('#stage-six-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.stageSix());
		return this;
	}
});

console.log('StageSix');