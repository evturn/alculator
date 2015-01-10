var StageTen = Backbone.View.extend({
	el: $('#stage'),
	stageTen: _.template($('#stage-ten-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.stageTen());
		return this;
	}
});

console.log('StageTen');