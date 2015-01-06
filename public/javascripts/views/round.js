var RoundView = Backbone.View.extend({
	el: $('#bac-container'),
	model: Round,	
	url: '/rounds',
	template: _.template($('#bacTemplate').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
	}
});

console.log('RoundView');