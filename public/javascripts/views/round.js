var RoundView = Backbone.View.extend({
	el: $('#bac-container'),
	model: Round,	
	url: '/api/rounds',
	template: _.template($('#bacTemplate').html()),
	initialize: function(round) {
		this.render();
	},
	render: function() {
    this.$el.html(this.template());
    return this;
	}
});

console.log('RoundView');