var RoundView = Backbone.View.extend({
	el: $('#bac-calculation'),
	model: Round,	
	url: '/rounds',
	template: _.template($('#bac-calculation-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
	}
});

console.log('RoundView');