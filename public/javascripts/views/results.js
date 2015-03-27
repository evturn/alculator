var Results = Backbone.View.extend({
	el: $('#bac-calculation'),
	model: Result,	
	template: _.template($('#bac-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		var stageSetter = new Stage(this.model.attributes);
		var stageView 	= new StageView({model: stageSetter});
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
});

