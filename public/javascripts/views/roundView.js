var RoundView = Backbone.View.extend({
	el: $('#bac-calculation'),
	model: Round,	
	url: '/rounds',
	template: _.template($('#bac-calculation-template').html()),
	initialize: function() {
		this.listenTo(this.model, 'all', this.setStage)
		this.render();
	},
	render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
	},
	setStage: function() {
		var stageSetter = this.model.attributes;
		stages.add(stageSetter);
		console.log('stageSetter', stageSetter);
	}
});

console.log('RoundView');