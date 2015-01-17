var StageView = Backbone.View.extend({
	el: $('#stage'),
	template: _.template($('#stage-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	severityCheck: function() {
			if (bac < 0.02) {
				var stageZero  = new StageView({});
			} else if (bac < 0.04) {
				var stageOne   = new StageView({});
			} else if (bac < 0.06) {
				var stageTwo	 = new StageView({});
			} else if (bac < 0.07) {
				var stageThree = new StageView({});
			} else if (bac < 0.10) {
				var stageFour  = new StageView({});
			} else if (bac < 0.13) {
				var stageFive	 = new StageView({});
			} else if (bac < 0.16) {
				var stageSix	 = new StageView({});
			} else if (bac < 0.20) {
				var stageSeven = new StageView({});
			} else if (bac < 0.25) {
				var stageEight = new StageView({});
			} else if (bac < 0.30) {
				var stageNine	 = new StageView({});
			} else if (bac >= 0.30) {
				var stageTen 	 = new StageView({});
			} else {
				alert('You sure you entered all your info?');
			}
	}
});

console.log('StageView');