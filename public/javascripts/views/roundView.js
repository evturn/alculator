var RoundView = Backbone.View.extend({
	el: $('#bac-calculation'),
	model: Round,	
	url: '/rounds',
	template: _.template($('#bac-calculation-template').html()),
	initialize: function() {
		this.setStage();
	},
	render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
	},
	setStage: function() {
		var stageSetter = new Stage(this.model.attributes);
		var stageView = new StageView({model: stageSetter});
		console.log('stageSetter', stageSetter);
		this.render();
	}
});

console.log('RoundView');